const fs = require('fs');
const path = require('path');

const SRC = __dirname + '/src/components';
const DATA = __dirname + '/src/data';
const CONTENT = __dirname + '/src/content';

function read(name) {
  return fs.readFileSync(SRC + '/_' + name + '.html', 'utf8');
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function build(outputName, parts) {
  let html = parts.map(p => read(p)).join('\n');
  const mcCard = read('card-mc');
  html = html.replace(/<!-- CARD_MC -->/g, mcCard);
  fs.writeFileSync(__dirname + '/' + outputName, html, 'utf8');
  console.log('✓ Built ' + outputName + ' (' + html.length + ' bytes)');
}

function buildWithContent(outputName, parts, placeholder, content) {
  let html = parts.map(p => read(p)).join('\n');
  html = html.replace(placeholder, content);
  fs.writeFileSync(__dirname + '/' + outputName, html, 'utf8');
  console.log('✓ Built ' + outputName + ' (' + html.length + ' bytes)');
}

// ─── DATA PAGE (логически систематизированная) ──────────────────────────────

function genDataPage() {
  const json = JSON.parse(fs.readFileSync(DATA + '/systematized.json', 'utf8'));
  const sections = [];

  sections.push(`<nav class="section-nav"><ul>
    <li><a href="#s1">1. Диагнозы и связи</a></li>
    <li><a href="#s2">2. Что есть / пить</a></li>
    <li><a href="#s3">3. Что принимать</a></li>
    <li><a href="#s4">4. Что делать</a></li>
    <li><a href="#s5">5. Лаборатории</a></li>
    <li><a href="#s6">6. Открытые вопросы</a></li>
  </ul></nav>`);

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. ДИАГНОЗЫ И ПЕРЕКРЁСТНЫЕ СВЯЗИ
  // ═══════════════════════════════════════════════════════════════════════════
  let s1 = '<h2 id="s1">1. Диагнозы и их взаимосвязи</h2>';

  // Table
  s1 += '<div class="table-wrap"><table><tr><th>Диагноз</th><th>Код</th><th>Подтверждён</th><th>Источник</th></tr>';
  for (const dx of json.diagnoses) {
    s1 += `<tr><td><strong>${esc(dx.name)}</strong></td><td>${esc(dx.code || '—')}</td><td>${esc(dx.date)}</td><td>${esc(dx.source)}</td></tr>`;
  }
  s1 += '</table></div>';

  // Central axis
  s1 += '<h3>Центральная ось: тучные клетки (mast cells)</h3>';
  s1 += '<div class="card card-amber"><p>Все четыре диагноза сходятся на <strong>гиперактивности тучных клеток</strong>. ' +
    'MCAS-состояние — не диагноз, а фенотип: хроническая нестабильность тучных клеток с реакцией на неспецифические триггеры ' +
    '(стресс, погода, субклиническая аллергия).</p></div>';

  // Dependency graph
  s1 += '<p class="note">Ниже — интерактивный граф зависимостей. Перетаскивайте ноды, кликните по ноде для перехода к карточке.</p>';
  s1 += '<div id="dependency-graph" class="graph-container"></div>';

  // Node cards
  s1 += genNodeCards(json.dependency_graph);

  // Cross-connections table
  s1 += '<h4>Документированные точки пересечения</h4>';
  s1 += '<div class="table-wrap"><table><tr><th>Связь</th><th>Механизм</th><th>Источник</th></tr>';
  s1 += '<tr><td>Эндометриоз → SIBO</td><td>91.9% женщин с эндометриозом имеют SIBO</td><td>PMID 39959963</td></tr>';
  s1 += '<tr><td>SIBO → Dizziness</td><td>44.8% пациентов с эндометриозом имеют головокружение</td><td>PMID 39959963</td></tr>';
  s1 += '<tr><td>Дисбиоз → Эстроболом</td><td>↑β-глюкуронидаза → ↑рециркуляция эстрогенов</td><td>Medicina 2026 review</td></tr>';
  s1 += '<tr><td>Аденомиоз → Дисбиоз</td><td>↑Rhodospirillales, ↑R. gauvreauii, ↓Lactobacillus</td><td>Valdés-Bango 2024</td></tr>';
  s1 += '<tr><td>Стресс → MC → Нерв</td><td>CRH + SP → дегрануляция → отёк вестибулярного нерва</td><td>vestibular-prep.md</td></tr>';
  s1 += '<tr><td>Low FODMAP → SIBO</td><td>90.7% ↓ симптомов, 3.5× лучше с обеими фазами</td><td>PMID 41684777</td></tr>';
  s1 += '</table></div>';

  sections.push(s1);

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. ЧТО ЕСТЬ / ПИТЬ (единый протокол)
  // ═══════════════════════════════════════════════════════════════════════════
  let s2 = '<h2 id="s2">2. Что есть и пить</h2>';

  s2 += '<div class="card"><p><strong>Зачем это.</strong> Питание — не просто «фон», а инструмент управления тучными клетками. При MCAS-фенотипе организм не справляется с расщеплением гистамина из еды (↓ активность DAO). Каждый приём пищи с высокогистаминовыми продуктами = дополнительный гистамин в кровь = дополнительная нагрузка на вестибулярный нерв и матку.</p>' +
    '<p>Стратегия построена в <strong>три фазы</strong>: (1) <strong>стабилизация тучных клеток</strong> (SIGHI Low Histamine — базовый), (2) <strong>коррекция микробиома и кишечной стенки</strong> (Low FODMAP, GAPS, Food Guide), (3) <strong>нутрицевтическая поддержка</strong> (противовоспалительное, DAO, гидратация). Главное правило: <strong>свежеприготовленная еда</strong> — в полежавшей растёт гистамин.</p></div>';

  s2 += '<h3>Фаза 1 — Стабилизация тучных клеток</h3><h4>SIGHI Low Histamine</h4>';
  s2 += '<p class="note">Пока тучные клетки нестабильны — организм не справляется с утилизацией экзогенного гистамина. Минимум 4-6 недель.</p>';

  const pri = json.nutrition.primary_protocol;
  s2 += '<div class="card-grid">';
  s2 += '<div class="card card-exclude"><h4>❌ Не есть</h4><ul>';
  for (const [,v] of Object.entries(pri.exclude)) s2 += `<li>${esc(v)}</li>`;
  s2 += '</ul></div>';
  s2 += '<div class="card card-allowed"><h4>✅ Можно</h4><ul>';
  for (const [,v] of Object.entries(pri.allowed)) s2 += `<li>${esc(v)}</li>`;
  s2 += '</ul></div>';
  s2 += '</div>';

  s2 += '<h4>Правила приготовления</h4><ul>';
  for (const r of pri.rules) s2 += `<li>${esc(r)}</li>`;
  s2 += '</ul>';

  s2 += '<h3>Фаза 2 — Коррекция микробиома и кишечной стенки</h3><p class="note">Выбор протокола — по показаниям: SIBO, дырявый кишечник, эстроболом.</p><h4>Low FODMAP (при SIBO/ЖКТ-симптомах)</h4>';
  const sec = json.nutrition.secondary_protocol;
  s2 += `<p>Эффективность: <strong>${esc(sec.effectiveness)}</strong>. Рифаксимин даёт более быстрое облегчение (63.6% эрадикация SIBO).</p>`;
  s2 += '<div class="table-wrap"><table><tr><th>Фаза</th><th>Описание</th></tr>';
  for (const [,v] of Object.entries(sec.phases)) {
    const parts = v.split(':');
    s2 += `<tr><td><strong>${esc(parts[0])}</strong></td><td>${esc(parts.slice(1).join(':').trim())}</td></tr>`;
  }
  s2 += '</table></div>';

  // GAPS card
  if (json.nutrition.optional_protocols && json.nutrition.optional_protocols.gaps) {
    const gaps = json.nutrition.optional_protocols.gaps;
    s2 += '<h4>GAPS (опционально, для углублённого исцеления)</h4>';
    s2 += '<div class="card card-amber" style="border-left:4px solid #f59e0b">';
    s2 += '<p><strong>' + esc(gaps.name) + '</strong></p>';
    s2 += '<p>' + esc(gaps.principle) + '</p>';
    s2 += '<p><em>Источник: ' + esc(gaps.key_source) + '</em></p>';
    s2 += '</div>';

    // Overlap with SIGHI
    const ov = gaps.overlap_with_sighi;
    s2 += '<h4>Пересечение с SIGHI (~70%)</h4>';
    s2 += '<p>' + esc(ov.note) + '</p>';
    s2 += '<div class="card-grid" style="grid-template-columns:1fr 1fr">';
    s2 += '<div class="card card-allowed"><h5>✅ Оба протокола исключают</h5><ul>';
    for (const item of ov.both_exclude) s2 += '<li>' + esc(item) + '</li>';
    s2 += '</ul></div>';
    s2 += '<div class="card card-allowed"><h5>🌟 Оба протокола рекомендуют</h5><ul>';
    for (const item of ov.both_emphasize) s2 += '<li>' + esc(item) + '</li>';
    s2 += '</ul></div>';
    s2 += '</div>';

    // Differences
    const diff = gaps.key_differences_from_sighi;
    s2 += '<h4>Ключевые расхождения</h4>';
    s2 += '<p>' + esc(diff.note) + '</p>';
    s2 += '<div class="card-grid" style="grid-template-columns:1fr 1fr">';
    s2 += '<div class="card card-exclude"><h5>🔴 SIGHI запрещает, GAPS разрешает</h5><ul>';
    for (const item of diff.sighi_excludes_gaps_allows) s2 += '<li>' + esc(item) + '</li>';
    s2 += '</ul></div>';
    s2 += '<div class="card" style="border-left:4px solid #f59e0b"><h5>🟡 GAPS запрещает, SIGHI разрешает</h5><ul>';
    for (const item of diff.gaps_excludes_sighi_allows) s2 += '<li>' + esc(item) + '</li>';
    s2 += '</ul></div>';
    s2 += '</div>';

    s2 += '<p class="note">' + esc(diff.practical_recommendation) + '</p>';

    // Stages
    s2 += '<h4>Стадии GAPS</h4><ol>';
    for (const stage of gaps.stages) s2 += '<li>' + esc(stage) + '</li>';
    s2 += '</ol>';

    // Relevance
    s2 += '<h4>Актуальность для данного случая</h4>';
    s2 += '<p>' + esc(gaps.relevance_to_case) + '</p>';
  }

  s2 += '<h4>Микробиом-таргетированный Food Guide</h4>';
  s2 += genMicrobiomeFoodGuide(json.microbiome_food_guide);

  s2 += '<h3>Фаза 3 — Нутрицевтическая поддержка</h3><h4>Противовоспалительная поддержка</h4>';
  s2 += '<div class="table-wrap"><table><tr><th>Нутриент</th><th>Источники</th></tr>';
  const ai = json.nutrition.anti_inflammatory;
  for (const [k,v] of Object.entries(ai)) {
    if (k === 'note') continue;
    s2 += `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`;
  }
  s2 += '</table></div>';

  const dao = json.nutrition.dao_support;
  s2 += `<h4>Кофакторы DAO</h4><p>${esc(dao.note)}</p><ul>`;
  s2 += `<li><strong>Кофакторы:</strong> ${esc(dao.cofactors)}</li>`;
  s2 += `<li><strong>Продукты:</strong> ${esc(dao.sources)}</li>`;
  s2 += `<li><strong>Дополнительно:</strong> ${esc(dao.additional)}</li>`;
  s2 += '</ul>';

  s2 += `<div class="card"><p>💧 <strong>Гидратация:</strong> ${esc(json.nutrition.hydration)}</p></div>`;

  sections.push(s2);

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. ЧТО ПРИНИМАТЬ (по мишеням)
  // ═══════════════════════════════════════════════════════════════════════════
  let s3 = '<h2 id="s3">3. Что принимать</h2>';

  s3 += '<div class="card"><p><strong>Зачем это.</strong> Препараты и добавки работают на разных уровнях MCAS-каскада (см. vestibular-prep.md, раздел 2.2 — механизмы). Комбинированная стратегия покрывает три мишени: (1) <strong>блокада рецепторов гистамина</strong> (антигистаминные — быстро, симптоматически), (2) <strong>стабилизация мембран тучных клеток</strong> (кверцетин, лютеолин, PEA — причинно, но медленно, 2-4 нед до эффекта), (3) <strong>защита гематолабиринтного барьера и иммуномодуляция</strong> (витамин C, NAC, витамин D — профилактика рецидивов).</p>' +
    '<p>Все дозировки из документации и исследований. Начинать с малого, добавлять по 1 средству в 3-7 дней для отслеживания реакции.</p></div>';

  s3 += '<h3>Ядро: стабилизация тучных клеток</h3>';
  s3 += '<div class="table-wrap"><table><tr><th>Средство</th><th>Доза</th><th>Мишень</th><th>Уровень</th></tr>';
  for (const it of json.supplements.mc_stabilizers) {
    s3 += `<tr><td><strong>${esc(it.name)}</strong></td><td>${esc(it.dose)}</td><td>${esc(it.mechanism)}</td><td><span class="tag tag-${it.evidence==='высокая'?'green':'amber'}">${esc(it.evidence)}</span></td></tr>`;
  }
  s3 += '</table></div>';

  s3 += '<h3>Антигистаминные (H1-блокада)</h3>';
  s3 += '<div class="table-wrap"><table><tr><th>Препарат</th><th>Доза</th><th>Особенность</th></tr>';
  for (const it of json.supplements.antihistamines) {
    s3 += `<tr><td><strong>${esc(it.name)}</strong></td><td>${esc(it.dose)}</td><td>${esc(it.mechanism)}</td></tr>`;
  }
  s3 += '</table></div>';

  s3 += '<h3>Барьер + иммуномодуляция</h3>';
  s3 += '<div class="table-wrap"><table><tr><th>Средство</th><th>Доза</th><th>Действие</th></tr>';
  for (const it of [...json.supplements.barrier_protection, ...json.supplements.immunomodulation]) {
    s3 += `<tr><td><strong>${esc(it.name)}</strong></td><td>${esc(it.dose)}</td><td>${esc(it.mechanism)}</td></tr>`;
  }
  s3 += '</table></div>';

  s3 += '<h3>Дополнительно</h3>';
  s3 += '<div class="table-wrap"><table><tr><th>Средство</th><th>Доза</th><th>Действие</th></tr>';
  for (const it of json.supplements.other) {
    s3 += `<tr><td><strong>${esc(it.name)}</strong></td><td>${esc(it.dose)}</td><td>${esc(it.mechanism)}${it.note ? ' (' + esc(it.note) + ')' : ''}</td></tr>`;
  }
  s3 += '</table></div>';

  // ───────────────────────────────────────────────────────────────────────────────
  // Пробиотики (Фаза 2)
  // ───────────────────────────────────────────────────────────────────────────────
  s3 += '<h3>Пробиотики (Фаза 2, после SIGHI-стабилизации)</h3>';
  const pb = json.supplements.probiotics;
  s3 += `<div class="card"><p><strong>Подход.</strong> ${esc(pb.general_approach.rationale)}</p><p><strong>Фаза:</strong> ${esc(pb.general_approach.phase)}</p>`;
  if (pb.general_approach.note) s3 += `<p><strong>Важно.</strong> ${esc(pb.general_approach.note)}</p>`;
  s3 += '</div>';

  for (const cand of pb.candidates) {
    s3 += `<div class="card" style="border-left: 4px solid #0d9488;margin-top:1rem">`;
    s3 += `<h4 style="margin:0 0 .25rem">${esc(cand.name)}</h4>`;
    s3 += `<p style="margin:0 0 .5rem;font-size:0.9rem;color:#666">${esc(cand.manufacturer)} — ${esc(cand.form)}`;
    if (cand.cold_chain_required) s3 += ' ❄️ хол.цепь 2-8°C';
    s3 += `</p>`;
    if (cand.rationale) s3 += `<p><strong>Обоснование:</strong> ${esc(cand.rationale)}</p>`;
    if (cand.start_protocol) s3 += `<p><strong>Старт:</strong> ${esc(cand.start_protocol)}</p>`;
    s3 += '<table class="strain-table"><tr><th>Штамм</th><th>hdcA</th><th>Гистамин-риск</th><th>Механизм</th><th>Evidence</th></tr>';
    for (const st of cand.strains) {
      s3 += `<tr><td><strong>${esc(st.strain)}</strong></td>`;
      s3 += `<td><span class="tag tag-green">${esc(st.hdcA_status)}</span></td>`;
      s3 += `<td><span class="tag tag-${st.histamine_risk === 'none' ? 'green' : 'amber'}">${esc(st.histamine_risk)}</span></td>`;
      s3 += `<td style="font-size:0.85rem">${esc(st.mechanism)}${st.note ? '<br><em>' + esc(st.note) + '</em>' : ''}</td>`;
      s3 += `<td style="font-size:0.85rem">${esc(st.evidence)}</td></tr>`;
    }
    s3 += '</table></div>';
  }

  sections.push(s3);

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. ЧТО ДЕЛАТЬ (по фазам)
  // ═══════════════════════════════════════════════════════════════════════════
  let s4 = '<h2 id="s4">4. Что делать</h2>';
  const exD = json.exercises;

  s4 += '<div class="card"><p><strong>Логика.</strong> Действия разделены на две фазы. <strong>Фаза 1</strong> (сейчас) — только то, что безопасно при неверифицированных очагах С4-С5. <strong>Фаза 2</strong> (после разрешения невролога) — полный протокол вестибулярной реабилитации Cawthorne-Cooksey, доказанный в РКИ (PMID 41561330). Параллельно — ежедневные вмешательства для снижения MC-активности и разрыва порочного круга (вагус, сенсорная защита, образ жизни). Источники: vestibular-prep.md (раздел 4 — упражнения, раздел 5 — протокол поезда), recommendations.md (раздел 2 — тренировки).</p></div>';

  s4 += '<h3>Фаза 1: Безопасный режим (сейчас)</h3>';
  s4 += '<div class="card card-amber"><p><strong>Активные упражнения для шеи противопоказаны</strong> до разрешения невролога.</p></div>';
  s4 += '<h4>Разрешено</h4><ul>';
  for (const it of exD.allowed_safe.items) s4 += `<li>${esc(it)}</li>`;
  s4 += '</ul>';
  s4 += '<h4>Запрещено</h4><div class="card card-exclude"><ul>';
  for (const it of exD.contraindicated.safe_mode) s4 += `<li>${esc(it)}</li>`;
  s4 += '</ul></div>';

  s4 += '<h3>Фаза 2: После разрешения невролога</h3>';
  s4 += `<p><strong>Протокол:</strong> Cawthorne-Cooksey, ${esc(exD.vestibular_rehabilitation.frequency)}.</p>`;
  s4 += `<p><strong>Принцип:</strong> ${esc(exD.vestibular_rehabilitation.principle)}</p>`;

  s4 += '<div class="table-wrap"><table><tr><th>Группа</th><th>Упражнения</th></tr>';
  for (const g of exD.vestibular_rehabilitation.groups) {
    s4 += `<tr><td><strong>${esc(g.group)}</strong></td><td><ul class="compact">`;
    for (const e of g.exercises) s4 += `<li>${esc(e)}</li>`;
    s4 += '</ul></td></tr>';
  }
  s4 += '</table></div>';

  s4 += '<h4>Доказанные протоколы</h4>';
  s4 += '<div class="table-wrap"><table><tr><th>Протокол</th><th>Эффективность</th></tr>';
  for (const p of exD.vestibular_rehabilitation.proven_protocols) {
    s4 += `<tr><td>${esc(p.name)}</td><td>${esc(p.effect)}</td></tr>`;
  }
  s4 += '</table></div>';

  s4 += '<h3>Ежедневные вмешательства</h3>';
  s4 += '<div class="card-grid">';

  s4 += '<div class="card"><h4>✅ Подтверждено (личный опыт)</h4><ul>';
  for (const a of json.helpful_actions.confirmed_effective) {
    s4 += `<li><strong>${esc(a.action)}</strong> — ${esc(a.effect)}</li>`;
  }
  s4 += '</ul></div>';

  s4 += '<div class="card"><h4>🎯 Приоритет</h4><ol>';
  for (const a of json.helpful_actions.priority_actions) {
    s4 += `<li><strong>${esc(a.action)}</strong> — ${esc(a.reason)}</li>`;
  }
  s4 += '</ol></div>';

  s4 += '<div class="card"><h4>🧘 Образ жизни</h4><ul>';
  for (const l of json.helpful_actions.lifestyle_recommendations) s4 += `<li>${esc(l)}</li>`;
  s4 += '</ul></div>';

  s4 += '<div class="card card-vagus"><h4>⚡ Стимуляция вагуса</h4><ul>';
  for (const v of json.helpful_actions.vagus_activation) s4 += `<li>${esc(v)}</li>`;
  s4 += '</ul></div>';

  s4 += '</div>'; // .card-grid

  s4 += '<h3>Противопоказано в любой фазе</h3><div class="card card-exclude"><ul>';
  for (const it of exD.contraindicated.general) s4 += `<li>${esc(it)}</li>`;
  s4 += '</ul></div>';

  sections.push(s4);

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. ЛАБОРАТОРИИ
  // ═══════════════════════════════════════════════════════════════════════════
  let s5 = '<h2 id="s5">5. Ключевые лабораторные аномалии</h2>';
  s5 += '<div class="table-wrap"><table><tr><th>Показатель</th><th>Значение</th><th>Норма</th><th>Статус</th><th>Что это значит</th></tr>';
  for (const [key, val] of Object.entries(json.lab_anomalies)) {
    if (key === 'note') continue;
    const statusColor = val.status.includes('норм') ? 'green' : (val.status.includes('крит') || val.status.includes('повыш') ? 'amber' : 'amber');
    s5 += `<tr><td>${esc(key)}</td><td><strong>${esc(val.value)}</strong></td><td>${esc(val.ref || '—')}</td><td><span class="tag tag-${statusColor}">${esc(val.status)}</span></td><td>${esc(val.interpretation || '')}</td></tr>`;
  }
  s5 += '</table></div>';
  if (json.lab_anomalies.note) s5 += `<p class="note">${esc(json.lab_anomalies.note)}</p>`;

  // MC targets
  s5 += '<h3>Мишени MCAS по уровням</h3>';
  s5 += `<p><strong>Каскад:</strong> ${esc(json.mc_targets.pathway)}</p>`;
  s5 += `<div class="card card-amber"><p><strong>Порочный круг:</strong> ${esc(json.mc_targets.vicious_circle)}</p></div>`;
  s5 += '<div class="table-wrap"><table><tr><th>Уровень</th><th>Вмешательство</th></tr>';
  for (const ip of json.mc_targets.intervention_points) {
    s5 += `<tr><td><strong>${esc(ip.level)}</strong></td><td>${esc(ip.interventions.join(' → '))}</td></tr>`;
  }
  s5 += '</table></div>';

  sections.push(s5);

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. ОТКРЫТЫЕ ВОПРОСЫ И ГИПОТЕЗЫ
  // ═══════════════════════════════════════════════════════════════════════════
  let s6 = '<h2 id="s6">6. Открытые вопросы и гипотезы</h2>';

  s6 += '<div class="card-grid">';

  s6 += '<div class="card"><h4>❓ Парадокс гистамина</h4><p class="note">Источник: vestibular-neuroimmunology-v2.md, раздел 1.3 (паттерны патогенеза)</p>' +
    '<p>Избыток гистамина повреждает вестибулярный нерв, но ЦНС использует гистамин (H1/H2-рецепторы в ядрах ствола) для вестибулярной компенсации.</p>' +
    '<p><strong>Вопрос:</strong> Не подавляет ли чрезмерная H1-блокада (Рупатадин + Драмина + кверцетин) центральную компенсацию? Нужен ли баланс? <em>Проверяется: нет данных о клиническом значении этого эффекта при MCAS.</em></p></div>';

  s6 += '<div class="card"><h4>❓ Прогестеронрезистентность</h4><p class="note">Источник: гормональный профиль 27.05.2026 + Valdés-Bango 2024 (DOI 10.1111/aogs.14847)</p>' +
    '<p>P4 = 21.9 нмоль/л (в 6-19× выше нормы фолликулярной фазы) при эндометрии 5мм.</p>' +
    '<p><strong>Два объяснения:</strong> (1) персистенция жёлтого тела без лютеолиза, (2) тканевая резистентность (эндометрий не отвечает на P4 из-за MC-опосредованного ↓P4-рецепторов).</p>' +
    '<p><strong>Альтернатива:</strong> возможно, это не резистентность, а гипоталамическая дисфункция (нарушение обратной связи). <em>Нужен повторный забор P4 + эстрадиол через цикл для дифференциации.</em></p></div>';

  s6 += '<div class="card"><h4>❓ SIBO → Dizziness</h4><p class="note">Источник: PMID 39959963 (case-control, 2025) — SIBO 91.9% при эндометриозе + dizziness 44.8%</p>' +
    '<p>Документировано, но механизм неясен.</p>' +
    '<p><strong>Три гипотезы:</strong> (1) SIBO → системное воспаление → MC-активация → вертиго. (2) SIBO → блуждающий нерв (вагус) → вестибулярные ядра. (3) SIBO → мальабсорбция → дефицит B12/железа → неврологические симптомы. <em>Гипотеза (1) наиболее согласуется с MCAS-моделью, но требует подтверждения.</em></p></div>';

  s6 += '<div class="card"><h4>❓ Очаги С4-С5</h4><p class="note">Источник: МСКТ 18.04.2026 — очаги С4 3×5, С5 5×4 мм.</p>' +
    '<p><strong>Дифференциальный ряд:</strong> гемангиомы (наиболее вероятно, бессимптомные, ~10% популяции), остеопороз (исключить DXA при аденомиозе), метастазы (маловероятно без первичной опухоли), инфекция (спондилодисцит — проверить CRP, клинику).</p>' +
    '<p><strong>Альтернатива:</strong> цервикогенное головокружение (C1-C3 проприоцепция). <em>Очаги в С4-С5 не объясняют вертиго напрямую.</em></p></div>';

  s6 += '<div class="card"><h4>❓ GLA-анализ не сделан</h4><p class="note">Источник: vestibular-neuroimmunology-v2.md, раздел 1 (диагностика ВН)</p>' +
    '<p>Генетический лейкоцитарный анализ (дифференциация ВН от центральных причин) не проводился.</p>' +
    '<p>При рецидивирующем течении и MCAS-фенотипе может быть полезен для исключения: (1) мигрень с вестибулярной аурой, (2) транзиторные ишемические атаки (при гематокрите 46.6% — ↑ риск тромбозов?), (3) аутоиммунное поражение внутреннего уха (Cogan, GPA). <em>На данный момент — информационный пробел.</em></p></div>';

  s6 += '<div class="card"><h4>❓ NK-клетки и эндометриоз</h4><p class="note">Источник: Medicina 2026 review (DOI 10.3390/medicina62020351) — Th2-сдвиг при эндометриозе</p>' +
    '<p>Дисфункция NK-клеток документирована при эндометриозе (↓ цитотоксичность → неспособность элиминировать ретроградный эндометрий).</p>' +
    '<p><strong>Вопрос:</strong> связана ли NK-дисфункция с MCAS-фенотипом? Есть ли единый иммунный дефект (Th2-сдвиг), объясняющий и эндометриоз, и повышенную MC-реактивность? <em>Данных о прямой связи NK и MCAS пока нет — область исследований.</em></p></div>';

  s6 += '<div class="card"><h4>❓ Эстроболом как драйвер</h4><p class="note">Источник: Medicina 2026 review (DOI 10.3390/medicina62020351) + ProMetrioS RCT (DOI 10.1186/s13063-025-09405-5)</p>' +
    '<p>↑β-глюкуронидаза из дисбиотичного микробиома → ↑рециркуляция эстрогенов → прогрессия аденомиоза.</p>' +
    '<p><strong>Гипотеза:</strong> первичный дефект — не гормональный, а микробиомный. Тогда терапия первой линии — не гормоны, а коррекция микробиома (пробиотики + Low FODMAP + рифаксимин). <em>ProMetrioS RCT проверяет это — результаты ожидаются.</em></p></div>';

  s6 += '<div class="card"><h4>❓ Связь вестибулярного неврита и аденомиоза</h4><p class="note">Источник: собственная гипотеза на основе MCAS-модели (vestibular-prep.md). Прямых исследований коморбидности нет.</p>' +
    '<p>MCAS-ось связывает оба состояния через системную MC-активацию, но исследований, напрямую изучающих коморбидность ВН и аденомиоза, не найдено.</p>' +
    '<p><strong>Это candidate для case report</strong> — уникальное пересечение двух редких состояний через общий MC-механизм. <em>При рецидиве рекомендую документировать для публикации.</em></p></div>';

  s6 += '</div>'; // .card-grid

  sections.push(s6);

  sections.push(genGraphScript(json.dependency_graph));

  return sections.join('\n');
}

// ─── FOOD GUIDE ──────────────────────────────────────────────────────────────

function renderFoodCard(f) {
  var tagHtml = '';
  if (f.sighi === true || f.sighi === 'true') tagHtml += '<span class="food-tag sighi">SIGHI</span>';
  if (f.fodmap === true || f.fodmap === 'true') tagHtml += '<span class="food-tag fodmap">FODMAP</span>';
  else if (typeof f.fodmap === 'string' && f.fodmap) tagHtml += '<span class="food-tag fodmap-y">FODMAP?</span>';

  var ruBadge = '';
  if (f.ru_access === 'сезонно') ruBadge = '<span class="ru-badge seas">🟡 Сезонно</span>';
  else if (f.ru_access === 'ограниченно') ruBadge = '<span class="ru-badge lim">🟠 Импорт</span>';
  else if (f.ru_access === 'редко') ruBadge = '<span class="ru-badge rare">🔴 Редкий</span>';

  var compBadge = '';
  if (f.compartment === 'reproductive') compBadge = '<span class="comp-badge repro">Репродуктивный</span>';
  else if (f.compartment === 'both') compBadge = '<span class="comp-badge both">Оба</span>';
  else compBadge = '<span class="comp-badge gut">Кишечник</span>';

  var cycleLabels = { follicular: 'Фолликулярная', luteal: 'Лютеиновая', menstrual: 'Менструация', both: 'Любая фаза' };
  var cycleBadge = '';
  if (f.cycle_phase && cycleLabels[f.cycle_phase]) {
    cycleBadge = '<span class="cycle-badge ' + esc(f.cycle_phase) + '">📅 ' + cycleLabels[f.cycle_phase] + '</span>';
  }

  var c = '<div class="food-card" data-cat="' + esc(f.cat || '') + '" data-comp="' + esc(f.compartment || 'gut') + '" data-estro="' + (f.estrobolome ? '1' : '0') + '" data-cycle="' + esc(f.cycle_phase || 'both') + '">';
  c += '<div class="food-card-header">';
  c += '<span class="emoji">' + (f.emoji || '🍽') + '</span>';
  c += '<span class="name">' + esc(f.name || '') + (f.anti_ox ? ' 🛡️' : '') + '</span>';
  if (ruBadge) c += ruBadge;
  c += compBadge;
  if (cycleBadge) c += cycleBadge;
  c += '<span class="cat">' + esc(f.cat || '') + '</span>';
  if (tagHtml) c += '<span class="food-tags">' + tagHtml + '</span>';
  c += '</div>';

  if (f.bacteria) {
    c += '<div class="food-label">Bacteria</div>';
    c += '<div class="food-body">' + esc(f.bacteria) + '</div>';
  }

  if (f.mechanism) {
    c += '<div class="food-label">Mechanism</div>';
    c += '<div class="food-body">' + esc(f.mechanism) + '</div>';
  }

  if (f.estrobolome) {
    c += '<div class="food-label">Эстроболом</div>';
    c += '<div class="food-body estro-body">' + esc(f.estrobolome) + '</div>';
  }

  if (f.benefit) {
    c += '<div class="food-label">Endometriosis benefit</div>';
    c += '<div class="food-body">' + esc(f.benefit) + '</div>';
  }

  if (f.cycle_phase && f.cycle_note) {
    c += '<div class="food-label">📅 Фаза цикла</div>';
    c += '<div class="food-body">' + esc(f.cycle_note) + '</div>';
  }

  if (f.time_of_day || f.preparation) {
    c += '<div class="food-prep-row">';
    if (f.time_of_day) c += '<span class="food-prep-item time">' + esc(f.time_of_day) + '</span>';
    if (f.preparation) c += '<span class="food-prep-item prep">' + esc(f.preparation) + '</span>';
    c += '</div>';
  }

  if (f.source) {
    c += '<div class="food-source">📎 ' + esc(f.source) + '</div>';
  }

  if (f.ru_alt) {
    c += '<div class="food-ru-alt">💡 <strong>В РФ:</strong> ' + esc(f.ru_alt) + '</div>';
  }

  c += '</div>';
  return c;
}

function genMicrobiomeFoodGuide(data) {
  if (!data || !Array.isArray(data)) return '';
  const foods = data;
  const cats = [...new Set(foods.map(f => f.cat || '').filter(Boolean))];
  const comps = [...new Set(foods.map(f => f.compartment || '').filter(Boolean))];
  const compLabels = { gut: 'Кишечник', reproductive: 'Репродуктивный тракт', both: 'Оба компартмента' };
  const hasEstro = foods.some(f => f.estrobolome);

  let s = '';
  s += '<h3>Food Guide: Microbiome Targets</h3>';
  s += '<p>Each food item is mapped to specific bacteria, mechanisms, and endometriosis benefits.</p>';

  // Tabs
  s += '<div class="food-tabs">';
  s += '<button class="food-tab active" data-tab="all">📋 Все продукты</button>';
  if (hasEstro) s += '<button class="food-tab" data-tab="estro">🧬 Эстроболом</button>';
  s += '</div>';

  // ─── Tab: Все продукты ─────────────────────────────────────────────
  s += '<div class="food-tab-content active" id="tab-all">';

  // Compartment filter row
  s += '<div class="food-filter" id="compFilter">';
  s += '<button class="food-btn active" data-comp="all">Все компартменты</button>';
  for (const c of comps) {
    s += '<button class="food-btn" data-comp="' + esc(c) + '">' + esc(compLabels[c] || c) + '</button>';
  }
  s += '</div>';

  // Category filter row
  s += '<div class="food-filter" id="catFilter">';
  s += '<button class="food-btn active" data-cat="all">Все категории</button>';
  for (const c of cats) s += '<button class="food-btn" data-cat="' + esc(c) + '">' + esc(c) + '</button>';
  s += '</div>';

  // Estrobolome filter row
  if (hasEstro) {
    s += '<div class="food-filter" id="estroFilter">';
    s += '<button class="food-btn active" data-estro="all">Все</button>';
    s += '<button class="food-btn" data-estro="1">Только эстроболом-мишени</button>';
    s += '<button class="food-btn" data-estro="0">Без эстроболом-механизма</button>';
    s += '</div>';
  }

  // Cycle phase filter row
  s += '<div class="food-filter" id="cycleFilter">';
  s += '<button class="food-btn active" data-cycle="all">Все фазы</button>';
  s += '<button class="food-btn" data-cycle="follicular">🌷 Фолликулярная</button>';
  s += '<button class="food-btn" data-cycle="luteal">🌙 Лютеиновая</button>';
  s += '<button class="food-btn" data-cycle="menstrual">🩸 Менструация</button>';
  s += '</div>';

  s += '<div class="food-grid" id="foodGrid">';
  for (const f of foods) {
    s += renderFoodCard(f);
  }
  s += '</div>';
  s += '</div>'; // tab-all

  // ─── Tab: Эстроболом ──────────────────────────────────────────────
  if (hasEstro) {
    s += '<div class="food-tab-content" id="tab-estro">';
    s += '<div class="estro-info">';
    s += '<h4 style="margin-top:0">🧬 Эстроболом — микробиомный регулятор эстрогенов</h4>';
    s += '<p>Эстроболом — совокупность генов бактерий, метаболизирующих эстрогены. '
      + 'Кишечные бактерии (Clostridium, Bacteroides) производят β-глюкуронидазу — '
      + 'фермент, который деконъюгирует связанные эстрогены и возвращает их в кровоток '
      + '(энтерогепатическая рециркуляция). При дисбиозе активность β-глюкуронидазы ↑ → '
      + 'уровень свободных эстрогенов ↑ → стимуляция эндометриоидных очагов.</p>';
    s += '<p>Продукты ниже <strong>снижают активность эстроболома</strong> через ↓β-глюкуронидазу, '
      + '↓ароматазу (CYP19A1), ↑SHBG, ↑CYP1A1 (2-гидроксилирование) и другие механизмы. '
      + 'Это ключевой немедикаментозный подход к коррекции гиперэстрогенного статуса.</p>';
    s += '</div>';
    s += '<div class="food-grid" id="estroGrid">';
    for (const f of foods) {
      if (f.estrobolome) s += renderFoodCard(f);
    }
    s += '</div>';
    s += '</div>'; // tab-estro
  }

  // Inline filter + tab JS
  s += '<script>';
  s += 'document.addEventListener(\'DOMContentLoaded\',function(){';

  // Tab switching
  s += 'document.querySelectorAll(\'.food-tab\').forEach(function(t){';
  s += 't.addEventListener(\'click\',function(){';
  s += 'document.querySelectorAll(\'.food-tab\').forEach(function(x){x.classList.remove(\'active\');});';
  s += 't.classList.add(\'active\');';
  s += 'document.querySelectorAll(\'.food-tab-content\').forEach(function(x){x.classList.remove(\'active\');});';
  s += 'document.getElementById(\'tab-\'+t.getAttribute(\'data-tab\')).classList.add(\'active\');';
  s += '});});';

  // Cross-filter in "Все продукты" tab
  s += 'function filterCards(){';
  s += 'var comp=document.querySelector(\'#compFilter .food-btn.active\').getAttribute(\'data-comp\');';
  s += 'var cat=document.querySelector(\'#catFilter .food-btn.active\').getAttribute(\'data-cat\');';
  s += 'var estro=document.querySelector(\'#estroFilter .food-btn.active\').getAttribute(\'data-estro\');';
  s += 'var cycle=document.querySelector(\'#cycleFilter .food-btn.active\').getAttribute(\'data-cycle\');';
  s += 'document.querySelectorAll(\'#tab-all .food-card\').forEach(function(c){';
  s += 'var mcomp=comp===\'all\'||c.getAttribute(\'data-comp\')===comp;';
  s += 'var mcat=cat===\'all\'||c.getAttribute(\'data-cat\')===cat;';
  s += 'var mestro=estro===\'all\'||c.getAttribute(\'data-estro\')===estro;';
  s += 'var cc=c.getAttribute(\'data-cycle\');';
  s += 'var mcycle=cycle===\'all\'||cc===cycle||cc===\'both\';';
  s += 'c.style.display=mcomp&&mcat&&mestro&&mcycle?\'\':\'none\';';
  s += '});}';
  s += 'var allBtns=document.querySelectorAll(\'#compFilter .food-btn,#catFilter .food-btn,#estroFilter .food-btn,#cycleFilter .food-btn\');';
  s += 'allBtns.forEach(function(b){';
  s += 'b.addEventListener(\'click\',function(){';
  s += 'var p=b.parentNode.id;';
  s += 'p=document.getElementById(p);';
  s += 'p.querySelectorAll(\'.food-btn\').forEach(function(x){x.classList.remove(\'active\');});';
  s += 'b.classList.add(\'active\');';
  s += 'filterCards();';
  s += '});});';
  s += '});';
  s += '</script>';

  return s;
}

// ─── LITERATURE PAGE ─────────────────────────────────────────────────────────

function genLiteraturePage() {
  const json = JSON.parse(fs.readFileSync(DATA + '/systematized.json', 'utf8'));
  const sections = [];

  // Literature catalog from JSON
  sections.push('<h2>Каталог статей</h2>');
  sections.push('<div class="table-wrap"><table><tr><th>Название</th><th>Журнал</th><th>DOI</th><th>Ключевой вывод</th></tr>');
  for (const a of json.literature_catalog.articles) {
    sections.push(`<tr><td>${esc(a.title)}</td><td>${esc(a.journal)}</td><td><a href="https://doi.org/${esc(a.doi)}" target="_blank" rel="noopener">${esc(a.doi)}</a></td><td>${esc(a.key_finding)}</td></tr>`);
  }
  sections.push('</table></div>');

  // Read and embed each literature md file
  const litFiles = [
    { id: 'medicina', file: 'medicina-2026-microbiota-review.md', title: 'Gut Microbiota Alterations in Endometriosis — Systematic Review' },
    { id: 'prometrios', file: 'prometrios-rct-2025.md', title: 'ProMetrioS: Probiotics RCT for Endometriosis' },
    { id: 'valdes', file: 'valdes-bango-2024-adenomyosis-microbiome.md', title: 'Adenomyosis Microbiome — Valdés-Bango 2024' }
  ];

  for (const lit of litFiles) {
    const content = fs.readFileSync(CONTENT + '/' + lit.file, 'utf8');
    sections.push(`<div class="lit-card" id="${esc(lit.id)}">`);
    // Simple md → html conversion
    const html = simpleMdToHtml(content);
    sections.push(html);
    sections.push('</div>');
  }

  // Recommendations synthesis
  sections.push('<h2>Сводка рекомендаций (recommendations.md)</h2>');
  sections.push('<p class="note">Основано на результатах API-запросов к PubMed, Europe PMC, ClinicalTrials.gov, OpenFDA.</p>');
  const recContent = fs.readFileSync(CONTENT + '/recommendations.md', 'utf8');
  sections.push('<div class="lit-card"><div class="md-content">' + simpleMdToHtml(recContent) + '</div></div>');

  // Books
  if (json.literature_catalog.books && json.literature_catalog.books.length) {
    sections.push('<h2>Рекомендованные книги</h2>');
    sections.push('<p class="note">Книги, рекомендованные для целостного понимания здоровья кишечника, гормонов, травмы и исцеления.</p>');
    sections.push('<div class="card-grid">');
    for (const b of json.literature_catalog.books) {
      sections.push('<div class="card" style="border-left:4px solid #f59e0b">');
      sections.push('<h4 style="margin-top:0">' + esc(b.title) + '</h4>');
      sections.push('<p><strong>' + esc(b.author) + '</strong></p>');
      sections.push('<p><em>' + esc(b.focus) + '</em></p>');
      sections.push('<p class="note">' + esc(b.why_useful) + '</p>');
      sections.push('</div>');
    }
    sections.push('</div>');
  }

  // Sources catalog
  sections.push('<h2>Базы данных (sources.md)</h2>');
  const sourcesContent = fs.readFileSync(CONTENT + '/sources.md', 'utf8');
  sections.push('<div class="lit-card"><div class="md-content">' + simpleMdToHtml(sourcesContent) + '</div></div>');

  return sections.join('\n');
}

function simpleMdToHtml(md) {
  let html = '';
  const lines = md.split('\n');
  let inUl = false, inTable = false;
  for (const raw of lines) {
    let line = raw;
    // Headings
    const hMatch = line.match(/^(#{1,3})\s+(.+)/);
    if (hMatch) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inTable) { html += '</tbody></table>\n'; inTable = false; }
      const level = hMatch[1].length;
      html += `<h${level+2}>${esc(hMatch[2])}</h${level+2}>\n`;
      continue;
    }
    // Table rows
    const tMatch = line.match(/^\|(.+)\|$/);
    if (tMatch) {
      const cells = tMatch[1].split('|').map(c => c.trim());
      if (!inTable) {
        html += '<div class="table-wrap"><table><thead><tr>';
        for (const c of cells) html += `<th>${esc(c)}</th>`;
        html += '</tr></thead><tbody>\n';
        inTable = true;
      } else {
        // Check if it's a separator row (---|---|---)
        if (line.match(/^\|[\s\-:]+\|[\s\-:]+\|/)) continue;
        html += '<tr>';
        for (const c of cells) html += `<td>${esc(c)}</td>`;
        html += '</tr>\n';
      }
      continue;
    }
    if (inTable && line.trim() === '') {
      html += '</tbody></table></div>\n';
      inTable = false;
      continue;
    }
    // List items
    const lMatch = line.match(/^[\s]*[-*]\s+(.+)/);
    if (lMatch) {
      if (!inUl) { html += '<ul>\n'; inUl = true; }
      html += `<li>${esc(lMatch[1])}</li>\n`;
      continue;
    }
    // Separators
    if (line.match(/^---+/)) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inTable) { html += '</tbody></table></div>\n'; inTable = false; }
      html += '<hr>\n';
      continue;
    }
    // Blockquote
    const bMatch = line.match(/^>\s+(.+)/);
    if (bMatch) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      html += `<blockquote>${esc(bMatch[1])}</blockquote>\n`;
      continue;
    }
    // Inline code
    if (line.match(/^```/)) {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      if (inTable) { html += '</tbody></table></div>\n'; inTable = false; }
      continue;
    }
    // Empty line
    if (line.trim() === '') {
      if (inUl) { html += '</ul>\n'; inUl = false; }
      continue;
    }
    // Paragraph
    if (inUl) { html += '</ul>\n'; inUl = false; }
    if (inTable) { html += '</tbody></table></div>\n'; inTable = false; }
    html += `<p>${esc(line)}</p>\n`;
  }
  if (inUl) html += '</ul>\n';
  if (inTable) html += '</tbody></table></div>\n';
  return html;
}

// ─── Dependency Graph Helpers ────────────────────────────────────────────────

function genNodeCards(graph) {
  let html = '<div class="card-grid node-grid">';
  for (const node of graph.nodes) {
    const outgoing = graph.edges.filter(e => e.from === node.id).map(e => {
      const t = graph.nodes.find(n => n.id === e.to);
      return { id: e.to, label: t ? t.label : e.to };
    });
    const incoming = graph.edges.filter(e => e.to === node.id).map(e => {
      const s = graph.nodes.find(n => n.id === e.from);
      return { id: e.from, label: s ? s.label : e.from };
    });
    const gName = (graph.groups[node.group] || {}).name || node.group;

    html += '<div class="card" id="card-' + esc(node.id) + '">';
    html += '<div class="node-card">';
    html += '<div class="node-card-header">';
    html += '<span class="node-emoji">' + esc(node.emoji) + '</span>';
    html += '<strong>' + esc(node.label) + '</strong>';
    html += '<span class="tag tag-' + esc(node.group) + '">' + esc(gName) + '</span>';
    html += '<button class="graph-btn" onclick="document.getElementById(\'dependency-graph\').scrollIntoView({behavior:\'smooth\'})" title="Показать на графе">\u2191 граф</button>';
    html += '</div>';
    html += '<p class="node-what">' + esc(node.what) + '</p>';

    if (outgoing.length) {
      html += '<div class="node-links"><span class="link-out">\u27A1 Влияет на: ';
      html += outgoing.map(function(e) { return '<a href="#card-' + esc(e.id) + '">' + esc(e.label) + '</a>'; }).join(', ');
      html += '</span></div>';
    }
    if (incoming.length) {
      html += '<div class="node-links"><span class="link-in">\u2B05 Зависит от: ';
      html += incoming.map(function(e) { return '<a href="#card-' + esc(e.id) + '">' + esc(e.label) + '</a>'; }).join(', ');
      html += '</span></div>';
    }

    html += '<div class="node-do"><strong>Что делать:</strong> ' + esc(node.what_to_do) + '</div>';
    html += '</div></div>';
  }
  html += '</div>';
  return html;
}

function genGraphScript(graph) {
  const nodes = graph.nodes.map(function(n) {
    return { id: n.id, label: n.emoji + ' ' + n.label, group: n.group, title: n.what };
  });
  const edges = graph.edges.map(function(e) {
    return { from: e.from, to: e.to, label: e.label, arrows: 'to', font: { size: 9, align: 'middle' } };
  });

  const groupColors = {
    hpa: { bg: '#fef2f2', border: '#fecaca', color: '#991b1b' },
    mc: { bg: '#f0fdf4', border: '#bbf7d0', color: '#166534' },
    vestibular: { bg: '#eef2ff', border: '#c7d2fe', color: '#1e40af' },
    uterine: { bg: '#fdf2f8', border: '#fbcfe8', color: '#9d174d' },
    gut: { bg: '#fffbeb', border: '#fde68a', color: '#92400e' },
    skeletal: { bg: '#f5f3ff', border: '#e9d5ff', color: '#5b21b6' }
  };
  const groups = {};
  for (const k in groupColors) {
    const v = groupColors[k];
    groups[k] = { shape: 'box', color: { background: v.bg, border: v.border }, font: { color: v.color, face: 'Inter, sans-serif', size: 12 }, borderWidth: 2, margin: 6, padding: 5 };
  }

  var nodesJSON = JSON.stringify(nodes);
  var edgesJSON = JSON.stringify(edges);
  var groupsJSON = JSON.stringify(groups);

  return '<script>\ndocument.addEventListener(\'DOMContentLoaded\',function(){\n' +
    'var nodes=new vis.DataSet(' + nodesJSON + ');\n' +
    'var edges=new vis.DataSet(' + edgesJSON + ');\n' +
    'var c=document.getElementById(\'dependency-graph\');\n' +
    'if(!c)return;\n' +
    'var data={nodes:nodes,edges:edges};\n' +
    'var options={\n' +
    'physics:{solver:\'forceAtlas2Based\',stabilization:{iterations:150},forceAtlas2Based:{gravitationalConstant:-40,springConstant:0.04,springLength:200}},\n' +
    'edges:{smooth:{type:\'curvedCW\',roundness:0.15},arrows:{to:{enabled:true,scaleFactor:0.6}},font:{size:9,color:\'#64748b\',strokeWidth:3,strokeColor:\'#ffffff\'},width:1.5,color:{color:\'#94a3b8\',highlight:\'#6366f1\'}},\n' +
    'nodes:{shape:\'box\',margin:6,borderWidth:2,font:{face:\'Inter, sans-serif\',size:12}},\n' +
    'groups:' + groupsJSON + ',\n' +
    'interaction:{hover:true,tooltipDelay:200,navigationButtons:true,keyboard:true},\n' +
    'layout:{improvedLayout:true}\n' +
    '};\n' +
    'var network=new vis.Network(c,data,options);\n' +
    'network.on(\'click\',function(p){if(p.nodes.length){var el=document.getElementById(\'card-\'+p.nodes[0]);if(el)el.scrollIntoView({behavior:\'smooth\',block:\'start\'});}});\n' +
    '});\n</script>';
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

// Existing pages
build('index.html', [
  'head-common',
  'head-index',
  'page-index',
]);

build('dashboard.html', [
  'head-common',
  'head-dashboard',
  'page-dashboard',
]);

// Data page
buildWithContent('data.html', [
  'head-common',
  'head-data',
  'page-data',
], '<!-- DATA_CONTENT -->', genDataPage());

// Literature page
buildWithContent('literature.html', [
  'head-common',
  'head-literature',
  'page-literature',
], '<!-- LITERATURE_CONTENT -->', genLiteraturePage());
