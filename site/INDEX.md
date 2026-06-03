# Исследовательская база — структура

```
docs/
├── INDEX.md                    ← этот файл — точка входа
├── sources.md                  ← список открытых мед. баз и API
├── research-findings.md        ← результаты первого раунда 10 запросов
├── recommendations.md          ← питание, тренировки, вмешательства (with PMID)
├── queries/                    ← сохранённые поисковые запросы
│   ├── 001-vestibular-inflammation.json
│   ├── 002-vestibular-systemic.md
│   └── ...
├── conditions/                 ← описание каждого состояния
│   ├── vestibular/
│   │   └── neuritis.md
│   ├── endometriosis/
│   │   └── overview.md
│   └── gut/
│       ├── sibo.md
│       └── dysbiosis.md
├── symptoms/                   ← симптомы пациента
│   └── dizziness.md
├── connections/                ← cross-связи между состояниями
│   ├── endometriosis-gut.md
│   ├── endometriosis-vestibular.md
│   └── gut-vestibular.md
├── studies/                    ← статьи и исследования
│   ├── pubmed/
│   ├── europepmc/
│   ├── clinicaltrials/
│   └── other/
└── patient/                    ← данные и история пациента
    ├── profile.md
    ├── timeline.md
    └── contradictions.md
```

## Правила работы

1. **Каждая статья** сохраняется в `studies/<source>/<pmid-nctid>.md` с полями:
   - PMID / NCT ID
   - Title, Authors, Year
   - Link
   - Key finding
   - Evidence level (обзор / РКИ / кейс / мета-анализ)
   - Tags (каких conditions/symptoms касается)

2. **Каждая найденная связь** заносится в `connections/<a>-<b>.md` и добавляется в общий граф.

3. **Состояния и симптомы** описываются фактами из литературы с цитированием (по PMID).

4. **Файлы в patient/** — только обезличенные данные: возраст, пол, симптомы, анализы, хронология.
