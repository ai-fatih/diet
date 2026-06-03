const LANGUAGES = {
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  es: { label: 'Español', flag: '🇪🇸' },
  ko: { label: '한국어', flag: '🇰🇷' },
  zh: { label: '中文', flag: '🇨🇳' },
};

const TRANS = {
  // ─── Meta / html ───
  lang: {
    en: 'en', de: 'de', es: 'es', ko: 'ko', zh: 'zh',
  },
  htmlDir: {
    en: 'ltr', de: 'ltr', es: 'ltr', ko: 'ltr', zh: 'ltr',
  },

  // ─── Header ───
  header_title: {
    en: 'Rehabilitation Dashboard',
    de: 'Rehabilitations-Dashboard',
    es: 'Panel de Rehabilitación',
    ko: '재활 대시보드',
    zh: '康复仪表板',
  },
  header_subtitle_small: {
    en: 'vestibular neuroimmunology',
    de: 'vestibuläre Neuroimmunologie',
    es: 'neuroinmunología vestibular',
    ko: '전정 신경면역학',
    zh: '前庭神经免疫学',
  },
  header_disclaimer: {
    en: 'This evidence-based protocol is for reference only. Consult your physician before use.',
    de: 'Dieses evidenzbasierte Protokoll dient nur zur Information. Konsultieren Sie Ihren Arzt.',
    es: 'Este protocolo basado en evidencia es solo como referencia. Consulte a su médico.',
    ko: '이 과학적 근거 기반 프로토콜은 참고용입니다. 의사와 상담하십시오.',
    zh: '此循证方案仅供参考。使用前请咨询您的医生。',
  },
  header_diagnosis: {
    en: 'Vestibular neuritis (AB31.0)',
    de: 'Vestibuläre Neuritis (AB31.0)',
    es: 'Neuritis vestibular (AB31.0)',
    ko: '전정신경염 (AB31.0)',
    zh: '前庭神经炎 (AB31.0)',
  },
  header_problem: {
    en: 'Condition',
    de: 'Diagnose',
    es: 'Problema',
    ko: '진단',
    zh: '诊断',
  },
  language_switch_label: {
    en: 'Language:',
    de: 'Sprache:',
    es: 'Idioma:',
    ko: '언어:',
    zh: '语言:',
  },
  size_label: {
    en: 'Size:', de: 'Größe:', es: 'Tamaño:', ko: '크기:', zh: '大小:',
  },
  size_small: {
    en: 'Small', de: 'Klein', es: 'Pequeño', ko: '작게', zh: '小',
  },
  size_medium: {
    en: 'Medium', de: 'Mittel', es: 'Mediano', ko: '중간', zh: '中',
  },
  size_large: {
    en: 'Large', de: 'Groß', es: 'Grande', ko: '크게', zh: '大',
  },

  // ─── Tabs ───
  tab_dashboard: {
    en: '◇ Home',
    de: '◇ Start',
    es: '◇ Inicio',
    ko: '◇ 홈',
    zh: '◇ 主页',
  },
  tab_today: {
    en: '📋 Today',
    de: '📋 Heute',
    es: '📋 Hoy',
    ko: '📋 오늘',
    zh: '📋 今天',
  },
  tab_exercises: {
    en: '🏋️ Exercises',
    de: '🏋️ Übungen',
    es: '🏋️ Ejercicios',
    ko: '🏋️ 운동',
    zh: '🏋️ 运动',
  },
  tab_food: {
    en: '🥗 Nutrition',
    de: '🥗 Ernährung',
    es: '🥗 Alimentación',
    ko: '🥗 영양',
    zh: '🥗 饮食',
  },
  tab_recommendations: {
    en: '📋 Recommendations',
    de: '📋 Empfehlungen',
    es: '📋 Recomendaciones',
    ko: '📋 권장 사항',
    zh: '📋 建议',
  },
  tab_glossary: {
    en: '📖 Glossary',
    de: '📖 Glossar',
    es: '📖 Glosario',
    ko: '📖 용어 사전',
    zh: '📖 术语表',
  },

  // ─── DASHBOARD TAB ───
  // Timeline
  tl_title: {
    en: '◇ Recovery Timeline',
    de: '◇ Genesungszeitplan',
    es: '◇ Cronología de recuperación',
    ko: '◇ 회복 타임라인',
    zh: '◇ 恢复时间线',
  },
  tl_acute: {
    en: 'Acute',
    de: 'Akut',
    es: 'Aguda',
    ko: '급성기',
    zh: '急性期',
  },
  tl_acute_dates: {
    en: 'Apr 8–10',
    de: '8.–10. Apr',
    es: '8–10 abr',
    ko: '4월 8-10일',
    zh: '4月8-10日',
  },
  tl_acute_desc: {
    en: 'Vertigo, nausea, bed rest',
    de: 'Schwindel, Übelkeit, Bettruhe',
    es: 'Vértigo, náuseas, reposo',
    ko: '현기증, 메스꺼움, 침상 안정',
    zh: '眩晕、恶心、卧床休息',
  },
  tl_subacute: {
    en: 'Subacute',
    de: 'Subakut',
    es: 'Subaguda',
    ko: '아급성기',
    zh: '亚急性期',
  },
  tl_subacute_dates: {
    en: 'Apr 11–17',
    de: '11.–17. Apr',
    es: '11–17 abr',
    ko: '4월 11-17일',
    zh: '4月11-17日',
  },
  tl_subacute_desc: {
    en: 'Tests, symptom relief, seeking help',
    de: 'Tests, Symptomlinderung, Hilfe suchen',
    es: 'Análisis, alivio, búsqueda de ayuda',
    ko: '검사, 증상 완화, 도움 요청',
    zh: '检查、症状缓解、寻求帮助',
  },
  tl_rehab: {
    en: 'Rehabilitation',
    de: 'Rehabilitation',
    es: 'Rehabilitación',
    ko: '재활',
    zh: '康复',
  },
  tl_rehab_desc: {
    en: 'VRT, vagus, MC stabilization, sensory protection',
    de: 'VRT, Vagus, MC-Stabilisierung, sensorischer Schutz',
    es: 'VRT, vagal, estabilización MC, protección sensorial',
    ko: 'VRT, 미주신경, 비만세포 안정화, 감각 보호',
    zh: '前庭康复训练、迷走神经、肥大细胞稳定、感官保护',
  },
  tl_prevention: {
    en: 'Prevention',
    de: 'Prävention',
    es: 'Prevención',
    ko: '예방',
    zh: '预防',
  },
  tl_prevention_desc: {
    en: 'Balance maintenance, relapse prevention',
    de: 'Gleichgewicht erhalten, Rückfall verhindern',
    es: 'Mantenimiento del equilibrio, prevención de recaídas',
    ko: '균형 유지, 재발 방지',
    zh: '维持平衡，预防复发',
  },
  tl_legend: {
    en: '◀ past  |  ● current phase  |  ○ ahead',
    de: '◀ vergangen  |  ● aktuelle Phase  |  ○ bevorstehend',
    es: '◀ pasado  |  ● fase actual  |  ○ próximo',
    ko: '◀ 지남  |  ● 현재 단계  |  ○ 예정',
    zh: '◀ 已过去  |  ● 当前阶段  |  ○ 未来',
  },
  tl_onset_label: {
    en: 'Onset:', de: 'Beginn:', es: 'Inicio:', ko: '발병:', zh: '发病:',
  },
  tl_acute_end_label: {
    en: 'Acute end:', de: 'Akutes Ende:', es: 'Fin agudo:', ko: '급성기 종료:', zh: '急性期结束:',
  },

  // Entity Map
  em_key_block: {
    en: 'key block', de: 'Schlüsselblock', es: 'bloque clave', ko: '핵심 블록', zh: '关键模块',
  },
  em_title: {
    en: '◇ Entity Map: vicious circle & intervention points',
    de: '◇ Wirkungskarte: Teufelskreis & Interventionspunkte',
    es: '◇ Mapa de conexiones: círculo vicioso y puntos de intervención',
    ko: '◇ 연결 지도: 악순환 및 개입 지점',
    zh: '◇ 关联图：恶性循环与干预点',
  },

  // Biomarkers
  bio_title: {
    en: '◇ Inflammation & Neurorecovery Biomarkers',
    de: '◇ Entzündungs- & Neuroregenerations-Biomarker',
    es: '◇ Biomarcadores de inflamación y neurorecuperación',
    ko: '◇ 염증 및 신경 회복 바이오마커',
    zh: '◇ 炎症与神经恢复生物标志物',
  },
  bio_marker: {
    en: 'Biomarker', de: 'Biomarker', es: 'Biomarcador', ko: '바이오마커', zh: '生物标志物',
  },
  bio_role: {
    en: 'Role', de: 'Rolle', es: 'Rol', ko: '역할', zh: '作用',
  },
  bio_your_level: {
    en: 'Your Level', de: 'Ihr Wert', es: 'Su nivel', ko: '수치', zh: '您的水平',
  },
  bio_ref: {
    en: 'Reference', de: 'Referenz', es: 'Referencia', ko: '참고 범위', zh: '参考范围',
  },
  bio_status: {
    en: 'Status', de: 'Status', es: 'Estado', ko: '상태', zh: '状态',
  },

  // VRT Card
  vrt_card_title: {
    en: '◇ Vestibular Rehabilitation', de: '◇ Vestibuläre Rehabilitation', es: '◇ Rehabilitación vestibular', ko: '◇ 전정 재활', zh: '◇ 前庭康复',
  },
  vrt_phase_label: {
    en: 'Sequence by phase:',
    de: 'Abfolge nach Phasen:',
    es: 'Secuencia por fases:',
    ko: '단계별 순서:',
    zh: '按阶段顺序：',
  },
  vrt_rule: {
    en: '✓ Rule: VOR → habituation → substitution',
    de: '✓ Regel: VOR → Habituation → Substitution',
    es: '✓ Regla: VOR → habituación → sustitución',
    ko: '✓ 규칙: VOR → 순응 → 대체',
    zh: '✓ 规则：前庭眼反射 → 习惯 → 替代',
  },
  vrt_suppressor: {
    en: '✗ Vestibulosuppressors >3 days delay compensation',
    de: '✗ Vestibuläre Suppressoren >3 Tage hemmen Kompensation',
    es: '✗ Supresores vestibulares >3 días retrasan compensación',
    ko: '✗ 전정억제제 3일 이상 사용 시 보상 지연',
    zh: '✗ 前庭抑制劑使用超過3天會延緩代償',
  },

  // Stimulation Card
  stim_title: {
    en: '◇ Vagus Stimulation', de: '◇ Vagus-Stimulation', es: '◇ Estimulación vagal', ko: '◇ 미주신경 자극', zh: '◇ 迷走神经刺激',
  },

  // MC Card
  mc_card_title: {
    en: '◇ Mast Cell Stabilization', de: '◇ Mastzell-Stabilisierung', es: '◇ Estabilización de mastocitos', ko: '◇ 비만세포 안정화', zh: '◇ 肥大细胞稳定',
  },
  mc_priority: {
    en: '★ Priority', de: '★ Priorität', es: '★ Prioridad', ko: '★ 우선순위', zh: '★ 优先',
  },

  // Sleep Card
  sleep_card_title: {
    en: '◇ Sleep + Sensory Protection', de: '◇ Schlaf + sensorischer Schutz', es: '◇ Sueño + protección sensorial', ko: '◇ 수면 + 감각 보호', zh: '◇ 睡眠 + 感官保护',
  },

  // Daily Routine
  routine_title: {
    en: '◇ Full Daily Routine',
    de: '◇ Tägliche Routine',
    es: '◇ Rutina diaria completa',
    ko: '◇ 전체 일일 루틴',
    zh: '◇ 完整每日作息',
  },
  routine_subtitle: {
    en: '— edit, add, delete',
    de: '— bearbeiten, hinzufügen, löschen',
    es: '— editar, añadir, eliminar',
    ko: '— 편집, 추가, 삭제',
    zh: '— 编辑、添加、删除',
  },
  routine_hint: {
    en: '💡 Click text to edit · ✕ to delete · + to add',
    de: '💡 Klick auf Text zum Bearbeiten · ✕ zum Löschen · + zum Hinzufügen',
    es: '💡 Haga clic en el texto para editar · ✕ para eliminar · + para añadir',
    ko: '💡 텍스트 클릭하여 편집 · ✕ 삭제 · + 추가',
    zh: '💡 点击文本编辑 · ✕ 删除 · + 添加',
  },

  // ─── TODAY TAB ───
  today_checklist: {
    en: '◇ Daily Checklist', de: '◇ Tägliche Checkliste', es: '◇ Lista diaria', ko: '◇ 일일 체크리스트', zh: '◇ 每日检查清单',
  },
  today_symptoms: {
    en: '◇ Symptom Scale (today)', de: '◇ Symptom-Skala (heute)', es: '◇ Escala de síntomas (hoy)', ko: '◇ 증상 척도 (오늘)', zh: '◇ 症状量表（今天）',
  },
  today_note: {
    en: '📝 Daily note', de: '📝 Tägliche Notiz', es: '📝 Nota del día', ko: '📝 오늘의 노트', zh: '📝 每日笔记',
  },
  today_reinforcement: {
    en: '◇ Positive Reinforcement', de: '◇ Positive Verstärkung', es: '◇ Refuerzo positivo', ko: '◇ 긍정 강화', zh: '◇ 正向强化',
  },
  today_weekly_log: {
    en: '◇ Weekly Log', de: '◇ Wochenprotokoll', es: '◇ Registro semanal', ko: '◇ 주간 기록', zh: '◇ 周记录',
  },

  // ─── EXERCISES TAB ───
  ex_sources: {
    en: '◇ Sources & Scientific Base', de: '◇ Quellen & wissenschaftliche Basis', es: '◇ Fuentes y base científica', ko: '◇ 출처 및 과학적 근거', zh: '◇ 来源与科学基础',
  },
  ex_principles: {
    en: '◇ Key Principles', de: '◇ Grundprinzipien', es: '◇ Principios clave', ko: '◇ 주요 원칙', zh: '◇ 关键原则',
  },
  ex_table_title: {
    en: '◇ Exercise Table by Time of Day', de: '◇ Übungstabelle nach Tageszeit', es: '◇ Tabla de ejercicios por hora', ko: '◇ 시간대별 운동표', zh: '◇ 按时间段的运动表',
  },
  ex_sub_morning: {
    en: '🌅 Morning', de: '🌅 Morgen', es: '🌅 Mañana', ko: '🌅 아침', zh: '🌅 早上',
  },
  ex_sub_day: {
    en: '☀️ Day', de: '☀️ Tag', es: '☀️ Día', ko: '☀️ 낮', zh: '☀️ 白天',
  },
  ex_sub_evening: {
    en: '🌙 Evening', de: '🌙 Abend', es: '🌙 Tarde', ko: '🌙 저녁', zh: '🌙 晚上',
  },

  // ─── FOOD TAB ───
  food_checker_title: {
    en: '◇ Quick Food & Meal Checker', de: '◇ Lebensmittel-Checker', es: '◇ Evaluación rápida de alimentos', ko: '◇ 식품 및 식사 빠른 확인', zh: '◇ 食品与餐食快速检查',
  },
  food_reference_title: {
    en: '◇ Food Reference: Low-Histamine, Low-GI', de: '◇ Lebensmittel-Referenz: niedriges Histamin, niedriger GI', es: '◇ Referencia de alimentos: baja histamina, bajo IG', ko: '◇ 식품 참조: 저히스타민, 저GI', zh: '◇ 食物参考：低组胺、低升糖指数',
  },
  food_sub_morning: {
    en: '🌅 Morning (breakfast)', de: '🌅 Morgen (Frühstück)', es: '🌅 Mañana (desayuno)', ko: '🌅 아침 (조식)', zh: '🌅 早上（早餐）',
  },
  food_sub_day: {
    en: '☀️ Day (lunch)', de: '☀️ Mittag (Mittagessen)', es: '☀️ Día (almuerzo)', ko: '☀️ 낮 (점심)', zh: '☀️ 白天（午餐）',
  },
  food_sub_evening: {
    en: '🌆 Evening (dinner)', de: '🌆 Abend (Abendessen)', es: '🌆 Tarde (cena)', ko: '🌆 저녁 (석식)', zh: '🌆 晚上（晚餐）',
  },
  dash_footer_1: {
    en: '📋 This dashboard is based on international research (Nature, Cochrane, J Neuroinflammation, Frontiers 2024–2026)',
    de: '📋 Dieses Dashboard basiert auf internationalen Studien (Nature, Cochrane, J Neuroinflammation, Frontiers 2024–2026)',
    es: '📋 Este panel se basa en investigaciones internacionales (Nature, Cochrane, J Neuroinflammation, Frontiers 2024–2026)',
    ko: '📋 이 대시보드는 국제 연구(Nature, Cochrane, J Neuroinflammation, Frontiers 2024–2026)에 기반합니다',
    zh: '📋 此仪表板基于国际研究（Nature、Cochrane、J Neuroinflammation、Frontiers 2024–2026）',
  },
  dash_footer_2: {
    en: '⚠️ For reference only · Consult your physician for treatment',
    de: '⚠️ Nur zur Information · Für die Behandlung konsultieren Sie Ihren Arzt',
    es: '⚠️ Solo como referencia · Consulte a su médico para el tratamiento',
    ko: '⚠️ 참고용입니다 · 치료는 의사와 상담하세요',
    zh: '⚠️ 仅供参考 · 治疗请咨询您的医生',
  },
  dash_footer_3: {
    en: '💾 Data saved automatically in your browser',
    de: '💾 Daten werden automatisch im Browser gespeichert',
    es: '💾 Los datos se guardan automáticamente en su navegador',
    ko: '💾 데이터가 브라우저에 자동 저장됩니다',
    zh: '💾 数据自动保存在浏览器中',
  },
  ex_footer_1: {
    en: 'Exercises are based on Cawthorne-Cooksey protocols, Herdman VRT, Porges\' polyvagal theory, Wilbarger DPPT, and Weil\'s breathing practices',
    de: 'Die Übungen basieren auf den Protokollen von Cawthorne-Cooksey, Herdman VRT, der polyvagalen Theorie von Porges, Wilbarger DPPT und den Atemübungen von Weil',
    es: 'Los ejercicios se basan en los protocolos de Cawthorne-Cooksey, Herdman VRT, la teoría polivagal de Porges, Wilbarger DPPT y las prácticas respiratorias de Weil',
    ko: '운동은 Cawthorne-Cooksey 프로토콜, Herdman VRT, Porges의 폴리바갈 이론, Wilbarger DPPT 및 Weil의 호흡법에 기반합니다',
    zh: '运动基于Cawthorne-Cooksey方案、Herdman前庭康复训练、Porges多迷走神经理论、Wilbarger DPPT和Weil呼吸练习',
  },
  ex_footer_2: {
    en: 'Consult your physician before starting. If symptoms worsen, stop and consult a specialist.',
    de: 'Vor Beginn der Übungen Arzt konsultieren. Bei Verschlimmerung der Symptome abbrechen und einen Spezialisten aufsuchen.',
    es: 'Consulte a su médico antes de comenzar. Si los síntomas empeoran, deténgase y consulte a un especialista.',
    ko: '시작 전 의사와 상담하십시오. 증상이 악화되면 중단하고 전문의와 상담하세요.',
    zh: '开始前请咨询医生。如果症状加重，请停止并咨询专科医生。',
  },
  food_footer_1: {
    en: 'Low-histamine diet is a temporary measure (3-4 weeks) to reduce mast cell load',
    de: 'Histaminarme Ernährung ist eine vorübergehende Maßnahme (3-4 Wochen) zur Entlastung der Mastzellen',
    es: 'La dieta baja en histamina es una medida temporal (3-4 semanas) para reducir la carga de mastocitos',
    ko: '저히스타민 식이는 비만세포 부하를 줄이기 위한 일시적 조치입니다(3-4주)',
    zh: '低组胺饮食是减轻肥大细胞负荷的临时措施（3-4周）',
  },
  food_footer_2: {
    en: 'After symptoms subside, gradually expand your diet by 1 food every 2-3 days',
    de: 'Nach Abklingen der Symptome die Ernährung schrittweise um 1 Lebensmittel alle 2-3 Tage erweitern',
    es: 'Después de que los síntomas disminuyan, expanda gradualmente su dieta 1 alimento cada 2-3 días',
    ko: '증상이 가라앉은 후 2-3일마다 1가지 식품씩 점차 확장하세요',
    zh: '症状消退后，每2-3天逐步增加1种食物',
  },
  glossary_title: {
    en: '📖 Glossary of Terms & Abbreviations',
    de: '📖 Glossar der Begriffe & Abkürzungen',
    es: '📖 Glosario de términos y abreviaturas',
    ko: '📖 용어 및 약어 사전',
    zh: '📖 术语和缩写词表',
  },
  food_rules_title: {
    en: '◇ Low-Histamine Diet Rules', de: '◇ Regeln für histaminarme Ernährung', es: '◇ Reglas de la dieta baja en histamina', ko: '◇ 저히스타민 식이 규칙', zh: '◇ 低组胺饮食规则',
  },
  food_search_placeholder: {
    en: '🔍 Search products...', de: '🔍 Produkte suchen...', es: '🔍 Buscar productos...', ko: '🔍 제품 검색...', zh: '🔍 搜索产品...',
  },
  food_reset: {
    en: '× Reset', de: '× Zurücksetzen', es: '× Reiniciar', ko: '× 초기화', zh: '× 重置',
  },

  // ─── Buttons ───
  btn_reset: {
    en: 'Reset', de: 'Zurücksetzen', es: 'Reiniciar', ko: '초기화', zh: '重置',
  },
  btn_clear: {
    en: 'Clear', de: 'Löschen', es: 'Limpiar', ko: '지우기', zh: '清除',
  },
  btn_add_today: {
    en: '➕ Add Today', de: '➕ Heute hinzufügen', es: '➕ Añadir hoy', ko: '➕ 오늘 추가', zh: '➕ 添加今天',
  },
  btn_clear_week: {
    en: 'Clear Week', de: 'Woche löschen', es: 'Limpiar semana', ko: '주간 지우기', zh: '清除本周',
  },
  btn_add_entry: {
    en: '＋ Add your entry', de: '＋ Eigenen Eintrag hinzufügen', es: '＋ Añadir su registro', ko: '＋ 항목 추가', zh: '＋ 添加条目',
  },
  btn_add_hint: {
    en: '(all fields are editable — click to change)',
    de: '(alle Felder sind editierbar — klicken zum Ändern)',
    es: '(todos los campos son editables — haga clic para cambiar)',
    ko: '(모든 필드는 편집 가능 — 클릭하여 변경)',
    zh: '(所有字段均可编辑 — 点击更改)',
  },

  // ─── Confirm dialogs ───
  confirm_reset_checklist: {
    en: 'Reset all checkmarks for today?',
    de: 'Alle Markierungen für heute zurücksetzen?',
    es: '¿Reiniciar todas las marcas de hoy?',
    ko: '오늘의 모든 체크를 초기화할까요?',
    zh: '重置今天的所有勾选？',
  },
  confirm_clear_week: {
    en: 'Clear the weekly log?',
    de: 'Wochenprotokoll löschen?',
    es: '¿Limpiar el registro semanal?',
    ko: '주간 기록을 지울까요?',
    zh: '清除周记录？',
  },
  confirm_delete_row: {
    en: 'Delete this entry?',
    de: 'Diesen Eintrag löschen?',
    es: '¿Eliminar esta entrada?',
    ko: '이 항목을 삭제할까요?',
    zh: '删除此条目？',
  },
  confirm_delete_item: {
    en: 'Delete this item?',
    de: 'Dieses Element löschen?',
    es: '¿Eliminar este elemento?',
    ko: '이 항목을 삭제할까요?',
    zh: '删除此项？',
  },

  // ─── Misc ───
  no_entries: {
    en: 'No entries yet. Add the first one.',
    de: 'Noch keine Einträge. Fügen Sie den ersten hinzu.',
    es: 'Sin registros. Añada el primero.',
    ko: '항목이 없습니다. 첫 번째 항목을 추가하세요.',
    zh: '暂无记录。请添加第一条。',
  },
  new_item: {
    en: 'New item',
    de: 'Neuer Eintrag',
    es: 'Nuevo elemento',
    ko: '새 항목',
    zh: '新项目',
  },
  new_product: {
    en: 'New product',
    de: 'Neues Produkt',
    es: 'Nuevo producto',
    ko: '새 제품',
    zh: '新产品',
  },
  add_description: {
    en: 'Add description',
    de: 'Beschreibung hinzufügen',
    es: 'Añadir descripción',
    ko: '설명 추가',
    zh: '添加描述',
  },
  time_placeholder: {
    en: 'time',
    de: 'Zeit',
    es: 'hora',
    ko: '시간',
    zh: '时间',
  },
  your_task: {
    en: 'Your task',
    de: 'Ihre Aufgabe',
    es: 'Su tarea',
    ko: '할 일',
    zh: '您的任务',
  },
  stat_days: {
    en: 'days in protocol', de: 'Tage im Protokoll', es: 'días en protocolo', ko: '프로토콜 일수', zh: '协议天数',
  },
  stat_checkrate: {
    en: 'checklist completion', de: 'Checkliste erledigt', es: 'finalización de lista', ko: '체크리스트 완료율', zh: '清单完成率',
  },
  stat_trend_improved: {
    en: 'improvement', de: 'Verbesserung', es: 'mejora', ko: '개선', zh: '改善',
  },
  stat_trend_worsened: {
    en: 'worsening', de: 'Verschlechterung', es: 'empeoramiento', ko: '악화', zh: '恶化',
  },
  stat_trend_stable: {
    en: 'no change', de: 'keine Veränderung', es: 'sin cambios', ko: '변화 없음', zh: '无变化',
  },
  food_allowed_tag: {
    en: 'Allowed', de: 'Erlaubt', es: 'Permitido', ko: '허용', zh: '允许',
  },
  food_caution_tag: {
    en: 'With caution', de: 'Mit Vorsicht', es: 'Con precaución', ko: '주의 필요', zh: '谨慎食用',
  },
  food_not_recommended_tag: {
    en: 'Not recommended', de: 'Nicht empfohlen', es: 'No recomendado', ko: '권장하지 않음', zh: '不推荐',
  },
  food_edit_hint: {
    en: '— columns are editable, add rows via button below',
    de: '— Spalten sind editierbar, Zeilen über den Button unten hinzufügen',
    es: '— columnas editables, añada filas con el botón de abajo',
    ko: '— 열 편집 가능, 아래 버튼으로 행 추가',
    zh: '— 列可编辑，通过下方按钮添加行',
  },
  food_allowed: {
    en: '✓ Allowed', de: '✓ Erlaubt', es: '✓ Permitido', ko: '✓ 허용', zh: '✓ 允许',
  },
  food_excluded: {
    en: '✗ Exclude for 3-4 weeks', de: '✗ 3-4 Wochen meiden', es: '✗ Excluir 3-4 semanas', ko: '✗ 3-4주 동안 제외', zh: '✗ 排除3-4周',
  },
  you_here_prefix: {
    en: '📍 You are here — ', de: '📍 Sie sind hier — ', es: '📍 Está aquí — ', ko: '📍 현재 위치 — ', zh: '📍 您在这里 — ',
  },
  weekly_goal_label: {
    en: '🎯 Goal for this week', de: '🎯 Ziel diese Woche', es: '🎯 Objetivo de esta semana', ko: '🎯 이번 주 목표', zh: '🎯 本周目标',
  },
  achievements_label: {
    en: '🏆 My achievements', de: '🏆 Meine Erfolge', es: '🏆 Mis logros', ko: '🏆 내 성과', zh: '🏆 我的成就',
  },
  stat_trend: {
    en: 'vertigo trend', de: 'Schwindeltrend', es: 'tendencia del vértigo', ko: '현기증 추세', zh: '眩晕趋势',
  },
  checklist_done_prefix: {
    en: 'Done: <span id="checkCount">0</span>/7',
    de: 'Erledigt: <span id="checkCount">0</span>/7',
    es: 'Hecho: <span id="checkCount">0</span>/7',
    ko: '완료: <span id="checkCount">0</span>/7',
    zh: '已完成: <span id="checkCount">0</span>/7',
  },
  today_footer_save: {
    en: '💾 All data saved automatically', de: '💾 Alle Daten werden automatisch gespeichert', es: '💾 Todos los datos se guardan automáticamente', ko: '💾 모든 데이터가 자동 저장됩니다', zh: '💾 所有数据自动保存',
  },
  today_footer: {
    en: '📊 Tracking symptoms and progress is key to successful rehabilitation',
    de: '📊 Symptom- und Fortschrittsverfolgung ist der Schlüssel zur erfolgreichen Rehabilitation',
    es: '📊 El seguimiento de síntomas y progreso es clave para una rehabilitación exitosa',
    ko: '📊 증상과 진행 상황 추적이 성공적인 재활의 핵심입니다',
    zh: '📊 追踪症状和进展是成功康复的关键',
  },
};

// ─── Wishes translations ───
const WISHES_TRANS = {
  en: [
    'Every day is a step toward recovery. You are stronger than you think.',
    'The ocean within us is calm and infinite. May your inner sea be peaceful.',
    'Soon there will be sun, sea, and fresh breeze. Everything in its time.',
    'Nature is wise: after the storm, clear skies always come.',
    'Light and warmth to your healing path. You have already come so far.',
    'Mountains are conquered step by step. Each day is a small summit.',
    'Flowers bloom in their own rhythm. Do not rush yourself — all in good time.',
    'Ease and peace to your soul. Your body knows how to heal.',
    'Nature restores itself — trust this process within you too.',
    'Every day you grow stronger. Even if invisible — work is happening inside.',
    'Imagine a quiet beach, the sound of waves, warm sand. Your nervous system thanks you for the rest.',
    'Dawn comes after the darkest night. Your dawn is near.',
    'A gentle wind of change brings renewal. Breathe deeper.',
    'Good night to your cells. Healing is born in sleep.',
    'You are light to yourself. Even in the fog of symptoms, remember: you exist.',
    'Waves come and go — and symptoms too. You will learn to be with them.',
    'The sunflower always turns toward the sun. Turn toward what gives you strength.',
    'Transformation needs time and patience. You are in the process — and that is beautiful.',
    'Tree roots go deep to withstand the storm. Your roots are your breath and awareness.',
    'Drop by drop — and stone wears away. Small steps lead to great victory.',
    'After rain, the air is cleaner. After trials, the mind is clearer.',
    'The vibration of life sounds in every cell. Sing, breathe, be.',
    'Beauty lives in every moment. Find it today — even in small things.',
    'Warm tea, silence, peace. Simple joys heal better than medicine.',
    'After the storm — a rainbow. You deserve a rainbow.',
  ],
  de: [
    'Jeder Tag ist ein Schritt zur Genesung. Du bist stärker, als du denkst.',
    'Das Meer in uns ist ruhig und unendlich. Möge dein innerer Ozean still sein.',
    'Bald gibt es Sonne, Meer und frische Brise. Alles zu seiner Zeit.',
    'Die Natur ist weise: Nach dem Sturm kommt immer klarer Himmel.',
    'Licht und Wärme für deinen Heilungsweg. Du hast schon so viel geschafft.',
    'Berge werden Schritt für Schritt bezwungen. Jeder Tag ist ein kleiner Gipfel.',
    'Blumen blühen in ihrem eigenen Rhythmus. Hetze dich nicht — alles zu seiner Zeit.',
    'Leichtigkeit und Frieden für deine Seele. Dein Körper weiß, wie man heilt.',
    'Die Natur erholt sich selbst — vertraue diesem Prozess auch in dir.',
    'Jeden Tag wirst du stärker. Auch wenn unsichtbar — im Inneren arbeitet es.',
    'Stell dir einen stillen Strand vor, Wellenrauschen, warmen Sand. Dein Nervensystem dankt dir für die Ruhe.',
    'Die Morgendämmerung kommt nach der dunkelsten Nacht. Deine Dämmerung ist nah.',
    'Sanfter Wind des Wandels bringt Erneuerung. Atme tiefer.',
    'Gute Nacht deinen Zellen. Im Schlaf entsteht Heilung.',
    'Du bist das Licht für dich selbst. Auch im Nebel der Symptome: denk daran, du bist da.',
    'Wellen kommen und gehen — und Symptome auch. Du lernst, mit ihnen zu sein.',
    'Die Sonnenblume dreht sich immer zur Sonne. Dreh dich dem zu, was dir Kraft gibt.',
    'Verwandlung braucht Zeit und Geduld. Du bist im Prozess — und das ist wunderbar.',
    'Baumwurzeln gehen tief, um dem Sturm zu trotzen. Deine Wurzeln sind dein Atem und deine Achtsamkeit.',
    'Tropfen für Tropfen höhlt den Stein. Kleine Schritte führen zu großen Siegen.',
    'Nach dem Regen ist die Luft sauberer. Nach Prüfungen ist der Geist klarer.',
    'Die Vibration des Lebens klingt in jeder Zelle. Sing, atme, sei.',
    'Schönheit lebt in jedem Moment. Finde sie heute — auch im Kleinen.',
    'Warmer Tee, Stille, Frieden. Einfache Freuden heilen besser als Medizin.',
    'Nach dem Sturm — ein Regenbogen. Du verdienst einen Regenbogen.',
  ],
  es: [
    'Cada día es un paso hacia la recuperación. Eres más fuerte de lo que crees.',
    'El mar dentro de nosotros es tranquilo e infinito. Que tu océano interior esté en calma.',
    'Pronto habrá sol, mar y brisa fresca. Todo a su tiempo.',
    'La naturaleza es sabia: después de la tormenta siempre llega el cielo despejado.',
    'Luz y calor para tu camino de sanación. Ya has llegado muy lejos.',
    'Las montañas se conquistan paso a paso. Cada día es una pequeña cumbre.',
    'Las flores florecen en su propio ritmo. No te apresures — todo a su tiempo.',
    'Ligereza y paz para tu alma. Tu cuerpo sabe cómo sanar.',
    'La naturaleza se restaura sola — confía en ese proceso también en ti.',
    'Cada día te vuelves más fuerte. Aunque invisible — dentro está trabajando.',
    'Imagina una playa tranquila, el sonido de las olas, arena cálida. Tu sistema nervioso te agradece el descanso.',
    'El amanecer llega después de la noche más oscura. Tu amanecer está cerca.',
    'Un viento suave de cambio trae renovación. Respira más profundo.',
    'Buenas noches a tus células. En el sueño nace la sanación.',
    'Eres luz para ti misma. Incluso en la niebla de los síntomas, recuerda: existes.',
    'Las olas van y vienen — y los síntomas también. Aprenderás a estar con ellos.',
    'El girasol siempre se vuelve hacia el sol. Vuélvete hacia lo que te da fuerza.',
    'La transformación requiere tiempo y paciencia. Estás en proceso — y eso es hermoso.',
    'Las raíces del árbol se hunden profundamente para resistir la tormenta. Tus raíces son tu respiración y conciencia.',
    'Gota a gota — y la piedra se desgasta. Pequeños pasos llevan a grandes victorias.',
    'Después de la lluvia, el aire es más limpio. Después de las pruebas, la mente es más clara.',
    'La vibración de la vida suena en cada célula. Canta, respira, sé.',
    'La belleza vive en cada momento. Encuéntrala hoy — incluso en lo pequeño.',
    'Té caliente, silencio, paz. Las alegrías simples curan mejor que la medicina.',
    'Después de la tormenta — un arcoíris. Mereces un arcoíris.',
  ],
  ko: [
    '매일이 회복을 위한 한 걸음입니다. 당신은 생각보다 강합니다.',
    '우리 안의 바다는 고요하고 끝이 없습니다. 당신의 내면의 바다가 평화롭기를 바랍니다.',
    '곧 햇살과 바다와 신선한 바람이 찾아올 것입니다. 모든 때가 있습니다.',
    '자연은 현명합니다. 폭풍 후에는 항상 맑은 하늘이 옵니다.',
    '당신의 치유 여정에 빛과 온기가 함께하기를. 당신은 이미 많은 것을 해냈습니다.',
    '산은 한 걸음씩 정복됩니다. 매일이 작은 정상입니다.',
    '꽃은 자신의 리듬에 피어납니다. 서두르지 마세요 — 모든 때가 있습니다.',
    '당신의 영혼에 평안과 쉼이 있기를. 당신의 몸은 치유하는 법을 압니다.',
    '자연은 스스로 회복합니다 — 당신 안에서도 이 과정을 신뢰하세요.',
    '매일 당신은 더 강해집니다. 보이지 않아도 — 내면에서는 작업이 일어나고 있습니다.',
    '조용한 해변, 파도 소리, 따뜻한 모래를 상상해보세요. 당신의 신경계가 휴식에 감사할 것입니다.',
    '가장 어두운 밤 후에 새벽이 옵니다. 당신의 새벽이 가까웠습니다.',
    '변화의 부드러운 바람이 새로움을 가져옵니다. 더 깊이 호흡하세요.',
    '당신의 세포에 좋은 밤이 되길. 잠 속에서 치유가 태어납니다.',
    '당신은 자신에게 빛입니다. 증상의 안개 속에서도 기억하세요: 당신은 존재합니다.',
    '파도는 오고 갑니다 — 증상도 마찬가지입니다. 함께 하는 법을 배우게 될 것입니다.',
    '해바라기는 항상 태양을 향합니다. 당신에게 힘을 주는 것을 향하세요.',
    '변화는 시간과 인내가 필요합니다. 당신은 과정 중에 있습니다 — 그리고 그것은 아름답습니다.',
    '나무 뿌리는 폭풍을 견디기 위해 깊이 내려갑니다. 당신의 뿌리는 호흡과 알아차림입니다.',
    '방울방울이 돌을 뚫습니다. 작은 발걸음이 큰 승리로 이어집니다.',
    '비가 온 후 공기는 더 맑습니다. 시련 후에 마음은 더 명확해집니다.',
    '생명의 진동이 모든 세포에서 울립니다. 노래하고, 호흡하고, 존재하세요.',
    '아름다움은 매 순간에 살아있습니다. 오늘 그것을 찾으세요 — 작은 것에서도.',
    '따뜻한 차, 침묵, 평화. 단순한 기쁨이 약보다 더 잘 치유합니다.',
    '폭풍 후에 — 무지개. 당신은 무지개를 받을 자격이 있습니다.',
  ],
  zh: [
    '每一天都是迈向康复的一步。你比自己想象的更强大。',
    '我们内心的海洋平静而无限。愿你内心的海洋宁静。',
    '很快就会有阳光、大海和清新的微风。一切自有其时。',
    '大自然是智慧的：风暴过后，晴空总会到来。',
    '愿光明和温暖伴随你的康复之路。你已经走了这么远。',
    '高山是一步一步征服的。每一天都是一个小顶峰。',
    '花朵按自己的节奏绽放。不要催促自己——一切自有其时。',
    '愿你的灵魂轻松平和。你的身体知道如何愈合。',
    '大自然会自我修复——也相信你体内的这个修复过程。',
    '每一天你都在变得更强大。即使看不见——内心的工作正在进行。',
    '想象一个安静的海滩，海浪的声音，温暖的沙滩。你的神经系统感谢你的休息。',
    '黎明在最黑暗的夜晚之后到来。你的黎明就在不远处。',
    '变化的微风带来更新。深呼吸。',
    '对你的细胞说晚安。愈合在睡眠中诞生。',
    '你是自己的光。即使在症状的迷雾中，记住：你在。',
    '海浪来来去去——症状也是如此。你会学会与它们相处。',
    '向日葵总是朝向太阳。转向能给你力量的事物。',
    '转变需要时间和耐心。你正在过程中——这很美。',
    '树根深扎以抵御风暴。你的根就是你的呼吸和觉知。',
    '滴水穿石。小步积累带来大胜利。',
    '雨后空气更清新。考验之后，心灵更清晰。',
    '生命的振动在每一个细胞中回响。歌唱，呼吸，存在。',
    '美存在于每一个瞬间。今天就去发现它——即使在微小的事物中。',
    '热茶，安静，平和。简单的快乐比药物更能治愈。',
    '风暴之后——彩虹。你值得拥有彩虹。',
  ],
};

// ─── Routine group titles ───
const GROUP_TITLES = {
  en: {
    exercises: '🏃 Exercises',
    nutrition: '🥗 Nutrition',
    meds: '💊 Medications / Supplements',
    activities: '🧘 Activities / Practices',
    sleep: '🌙 Sleep / Rest',
    custom: '📌 Custom',
  },
  de: {
    exercises: '🏃 Übungen',
    nutrition: '🥗 Ernährung',
    meds: '💊 Medikamente / Nahrungsergänzung',
    activities: '🧘 Aktivitäten / Praktiken',
    sleep: '🌙 Schlaf / Ruhe',
    custom: '📌 Eigenes',
  },
  es: {
    exercises: '🏃 Ejercicios',
    nutrition: '🥗 Nutrición',
    meds: '💊 Medicamentos / Suplementos',
    activities: '🧘 Actividades / Prácticas',
    sleep: '🌙 Sueño / Descanso',
    custom: '📌 Personalizado',
  },
  ko: {
    exercises: '🏃 운동',
    nutrition: '🥗 영양',
    meds: '💊 약물 / 보충제',
    activities: '🧘 활동 / 실천',
    sleep: '🌙 수면 / 휴식',
    custom: '📌 사용자 지정',
  },
  zh: {
    exercises: '🏃 运动',
    nutrition: '🥗 营养',
    meds: '💊 药物/补充剂',
    activities: '🧘 活动/练习',
    sleep: '🌙 睡眠/休息',
    custom: '📌 自定义',
  },
};

// ─── Checklist items ───
const CHECKLIST_TRANS = {
  en: [
    '☀️ Morning vagus practice (cold/breathing)',
    '👁 VOR exercises (3×1-2 min)',
    '💊 Quercetin + C + D + NAC',
    '🥗 Low-histamine diet',
    '🚶 Walk 20+ min',
    '🌙 Evening vagus practice (humming/breathing)',
    '🛌 Bedtime before 23:00',
  ],
  de: [
    '☀️ Morgen-Vagus-Praxis (kalt/Atmung)',
    '👁 VOR-Übungen (3×1-2 Min)',
    '💊 Quercetin + C + D + NAC',
    '🥗 Histaminarme Ernährung',
    '🚶 Spaziergang 20+ Min',
    '🌙 Abend-Vagus-Praxis (Summen/Atmung)',
    '🛌 Schlafenszeit vor 23:00',
  ],
  es: [
    '☀️ Práctica vagal matutina (frío/respiración)',
    '👁 Ejercicios VOR (3×1-2 min)',
    '💊 Quercetina + C + D + NAC',
    '🥗 Dieta baja en histamina',
    '🚶 Caminata 20+ min',
    '🌙 Práctica vagal nocturna (zumbido/respiración)',
    '🛌 Acostarse antes de las 23:00',
  ],
  ko: [
    '☀️ 아침 미주신경 운동 (찬물/호흡)',
    '👁 VOR 운동 (3회×1-2분)',
    '💊 퀘르세틴 + C + D + NAC',
    '🥗 저히스타민 식이',
    '🚶 20분 이상 걷기',
    '🌙 저녁 미주신경 운동 (윙윙거림/호흡)',
    '🛌 23시 전 취침',
  ],
  zh: [
    '☀️ 早晨迷走神经练习（冷水/呼吸）',
    '👁 前庭眼反射练习（3×1-2分钟）',
    '💊 槲皮素 + 维生素C + D + NAC',
    '🥗 低组胺饮食',
    '🚶 步行20分钟以上',
    '🌙 晚间迷走神经练习（哼鸣/呼吸）',
    '🛌 23:00前就寝',
  ],
};

// ─── Symptom labels ───
const SYMPTOM_TRANS = {
  en: ['Vertigo', 'Anxiety', 'Neck pain', 'Fatigue'],
  de: ['Schwindel', 'Angst', 'Nackenschmerzen', 'Müdigkeit'],
  es: ['Vértigo', 'Ansiedad', 'Dolor de cuello', 'Fatiga'],
  ko: ['현기증', '불안', '목 통증', '피로'],
  zh: ['眩晕', '焦虑', '颈部疼痛', '疲劳'],
};

// ─── Week log table headers ───
const WEEK_LOG_HEADERS = {
  en: ['Day', 'Vertigo (0-10)', 'Anxiety (0-10)', 'Checklist (/7)', 'Note'],
  de: ['Tag', 'Schwindel (0-10)', 'Angst (0-10)', 'Checkliste (/7)', 'Notiz'],
  es: ['Día', 'Vértigo (0-10)', 'Ansiedad (0-10)', 'Lista (/7)', 'Nota'],
  ko: ['일', '현기증 (0-10)', '불안 (0-10)', '체크리스트 (/7)', '노트'],
  zh: ['天', '眩晕 (0-10)', '焦虑 (0-10)', '清单 (/7)', '备注'],
};

const FOOD_TABLE_HEADERS = {
  en: ['Product / Dish', 'Histamine', 'GI', 'Verdict', 'Explanation', ''],
  de: ['Produkt / Gericht', 'Histamin', 'GI', 'Urteil', 'Erklärung', ''],
  es: ['Producto / Plato', 'Histamina', 'IG', 'Veredicto', 'Explicación', ''],
  ko: ['제품 / 요리', '히스타민', 'GI', '판정', '설명', ''],
  zh: ['食品/菜肴', '组胺', '升糖指数', '判定', '说明', ''],
};

const FOOD_REF_HEADERS = {
  en: ['Product', 'Category', 'GI', 'Histamine', 'Note'],
  de: ['Produkt', 'Kategorie', 'GI', 'Histamin', 'Hinweis'],
  es: ['Producto', 'Categoría', 'IG', 'Histamina', 'Nota'],
  ko: ['제품', '카테고리', 'GI', '히스타민', '비고'],
  zh: ['食品', '类别', '升糖指数', '组胺', '备注'],
};

// ─── Dashboard page translations ───
const DASHBOARD_TRANS = {
  dash_title: {
    en: '◆ Medical Dashboard', de: '◆ Medizinisches Dashboard', es: '◆ Panel médico', ko: '◆ 의료 대시보드', zh: '◆ 医疗仪表板',
  },
  dash_date: {
    en: 'April 18, 2026', de: '18. April 2026', es: '18 de abril de 2026', ko: '2026년 4월 18일', zh: '2026年4月18日',
  },
  dash_gender: {
    en: 'Female', de: 'Weiblich', es: 'Mujer', ko: '여성', zh: '女',
  },
  dash_complaints: {
    en: 'Complaints: dizziness (~10 days), neck pain',
    de: 'Beschwerden: Schwindel (~10 Tage), Nackenschmerzen',
    es: 'Quejas: mareos (~10 días), dolor de cuello',
    ko: '증상: 현기증(~10일), 목 통증',
    zh: '主诉：头晕（约10天）、颈部疼痛',
  },
  dash_referral: {
    en: 'Referral: neurologist → CT', de: 'Überweisung: Neurologe → CT', es: 'Derivación: neurólogo → TC', ko: '의뢰: 신경과 → CT', zh: '转诊：神经科 → CT',
  },
  // Section titles
  dash_s0_title: {
    en: '◆ 0. Diagnosis', de: '◆ 0. Diagnose', es: '◆ 0. Diagnóstico', ko: '◆ 0. 진단', zh: '◆ 0. 诊断',
  },
  dash_s1_title: {
    en: '◆ 1. Instrumental Studies', de: '◆ 1. Instrumentelle Untersuchungen', es: '◆ 1. Estudios instrumentales', ko: '◆ 1. 영상 검사', zh: '◆ 1. 器械检查',
  },
  dash_s2a_title: {
    en: '◆ 2A. Blood Biochemistry (11.04.2026)', de: '◆ 2A. Blutbiochemie (11.04.2026)', es: '◆ 2A. Bioquímica sanguínea (11.04.2026)', ko: '◆ 2A. 혈액 생화학 (2026.04.11)', zh: '◆ 2A. 血液生化（2026年4月11日）',
  },
  dash_s2b_title: {
    en: '◆ 2B. CBC + Formula (11.04.2026)', de: '◆ 2B. Blutbild + Formel (11.04.2026)', es: '◆ 2B. Hemograma + fórmula (11.04.2026)', ko: '◆ 2B. 혈액 검사 + 혈구 공식 (2026.04.11)', zh: '◆ 2B. 血常规+分类（2026年4月11日）',
  },
  dash_s3_symptoms: {
    en: '◆ Symptoms', de: '◆ Symptome', es: '◆ Síntomas', ko: '◆ 증상', zh: '◆ 症状',
  },
  dash_s3_hypotheses: {
    en: '◆ Hypotheses', de: '◆ Hypothesen', es: '◆ Hipótesis', ko: '◆ 가설', zh: '◆ 假设',
  },
  dash_s3_conclusion: {
    en: '◆ Key Conclusion', de: '◆ Schlussfolgerung', es: '◆ Conclusión clave', ko: '◆ 핵심 결론', zh: '◆ 关键结论',
  },
  dash_s4_title: {
    en: '◆ 4. Recommendations', de: '◆ 4. Empfehlungen', es: '◆ 4. Recomendaciones', ko: '◆ 4. 권장 사항', zh: '◆ 4. 建议',
  },
  dash_s5_excluded: {
    en: '◆ What Has Been Ruled Out (high probability)', de: '◆ Was ausgeschlossen wurde (hohe Wahrscheinlichkeit)', es: '◆ Qué se ha descartado (alta probabilidad)', ko: '◆ 배제된 사항 (고확률)', zh: '◆ 已排除的疾病（高概率）',
  },
  dash_s5_pending: {
    en: '◆ What Requires Confirmation', de: '◆ Was bestätigt werden muss', es: '◆ Qué requiere confirmación', ko: '◆ 확인이 필요한 사항', zh: '◆ 需要确认的事项',
  },
  // Table headers
  dash_diag_h: ['Diagnosis', 'Date', 'Status', 'Source'],
  dash_diag_h_de: ['Diagnose', 'Datum', 'Status', 'Quelle'],
  dash_diag_h_es: ['Diagnóstico', 'Fecha', 'Estado', 'Fuente'],
  dash_diag_h_ko: ['진단', '날짜', '상태', '출처'],
  dash_diag_h_zh: ['诊断', '日期', '状态', '来源'],
  dash_study_h: ['Study', 'Date', 'Result', 'Status', 'Comment'],
  dash_study_h_de: ['Untersuchung', 'Datum', 'Ergebnis', 'Status', 'Kommentar'],
  dash_study_h_es: ['Estudio', 'Fecha', 'Resultado', 'Estado', 'Comentario'],
  dash_study_h_ko: ['검사', '날짜', '결과', '상태', '비고'],
  dash_study_h_zh: ['检查', '日期', '结果', '状态', '备注'],
  dash_biochem_h: ['Parameter', 'Value', 'Reference', 'Status'],
  dash_biochem_h_de: ['Parameter', 'Wert', 'Referenz', 'Status'],
  dash_biochem_h_es: ['Parámetro', 'Valor', 'Referencia', 'Estado'],
  dash_biochem_h_ko: ['항목', '수치', '참고 범위', '상태'],
  dash_biochem_h_zh: ['指标', '数值', '参考范围', '状态'],
  // Priorities
  dash_priority_actions: {
    en: 'Priority Actions', de: 'Prioritäre Maßnahmen', es: 'Acciones prioritarias', ko: '우선 조치', zh: '优先措施',
  },
  dash_lifestyle: {
    en: 'Lifestyle', de: 'Lebensstil', es: 'Estilo de vida', ko: '생활 습관', zh: '生活方式',
  },
  dash_do: {
    en: 'Dos & Musts', de: 'Empfohlen', es: 'Recomendado', ko: '권장 사항', zh: '应做事项',
  },
  dash_dont: {
    en: 'Avoid Until MRI', de: 'Vermeiden bis MRT', es: 'Evitar hasta la RM', ko: 'MRI 전까지 피하기', zh: '核磁共振前避免',
  },
  dash_questions_header: {
    en: 'Questions for the Neurologist', de: 'Fragen an den Neurologen', es: 'Preguntas para el neurólogo', ko: '신경과 의사에게 할 질문', zh: '向神经科医生提问',
  },
  dash_footer: {
    en: 'This information is for reference only. An in-person consultation is required for diagnosis and treatment.',
    de: 'Diese Informationen dienen nur als Referenz. Für Diagnose und Behandlung ist eine persönliche Konsultation erforderlich.',
    es: 'Esta información es solo como referencia. Se requiere una consulta presencial para el diagnóstico y tratamiento.',
    ko: '이 정보는 참고용입니다. 진단 및 치료를 위해서는 대면 진료가 필요합니다.',
    zh: '此信息仅供参考。诊断和治疗需要当面咨询医生。',
  },
  dash_footer_date: {
    en: 'May 2026', de: 'Mai 2026', es: 'Mayo 2026', ko: '2026년 5월', zh: '2026年5月',
  },
};

const BIOMARKER_HEADERS = {
  en: ['Biomarker', 'Role', 'Your Level', 'Reference', 'Status'],
  de: ['Biomarker', 'Rolle', 'Ihr Wert', 'Referenz', 'Status'],
  es: ['Biomarcador', 'Rol', 'Su nivel', 'Referencia', 'Estado'],
  ko: ['바이오마커', '역할', '수치', '참고 범위', '상태'],
  zh: ['生物标志物', '作用', '您的水平', '参考范围', '状态'],
};

const VAGUS_TABLE_HEADERS = {
  en: ['Time', 'Practice', 'Duration'],
  de: ['Zeit', 'Praxis', 'Dauer'],
  es: ['Hora', 'Práctica', 'Duración'],
  ko: ['시간', '실천', '시간'],
  zh: ['时间', '练习', '时长'],
};

const EX_TABLE_HEADERS = {
  en: ['Category', 'Exercise', 'What it is', 'Why it works', 'Instructions'],
  de: ['Kategorie', 'Übung', 'Was es ist', 'Warum es wirkt', 'Anleitung'],
  es: ['Categoría', 'Ejercicio', 'Qué es', 'Por qué funciona', 'Instrucciones'],
  ko: ['분류', '운동', '설명', '효과 원리', '방법'],
  zh: ['分类', '运动', '说明', '原理', '操作方法'],
};
