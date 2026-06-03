# Открытые клинические и научные медицинские базы данных

## Научные статьи и публикации

| База | Описание | Доступ |
|------|----------|--------|
| **PubMed** (https://pubmed.ncbi.nlm.nih.gov) | Крупнейшая бесплатная библиографическая база биомедицинских статей (30M+ записей) | Веб-интерфейс + API (E-utilities) |
| **PubMed Central (PMC)** (https://www.ncbi.nlm.nih.gov/pmc) | Полнотекстовый архив биомедицинских статей в открытом доступе | Веб + API (OAI-PMH, E-utilities) |
| **Europe PMC** (https://europepmc.org) | Европейский аналог PMC, также включает патенты | Веб + REST API |
| **Cochrane Library** (https://www.cochranelibrary.com) | Систематические обзоры доказательной медицины | Частично открыт, абстракты бесплатно |
| **MEDLINE** | Через PubMed — ключевая база NLM по медицине | Входит в PubMed |
| **DOAJ** (https://doaj.org) | Directory of Open Access Journals — каталог рецензируемых открытых журналов | Веб + API |
| **CrossRef** (https://www.crossref.org) | Поиск DOI и метаданных публикаций | REST API |
| **Google Scholar** (https://scholar.google.com) | Поиск по научной литературе (неструктурирован) | Веб (ограничения при парсинге) |
| **Scopus** / **Web of Science** | Коммерческие библиотеки (частичный открытый доступ) | Подписка |

## Клинические исследования

| База | Описание | Доступ |
|------|----------|--------|
| **ClinicalTrials.gov** (https://clinicaltrials.gov) | Крупнейший реестр клинических исследований (NIH, 400K+ записей) | Веб + REST API (CTGov API v2) |
| **WHO ICTRP** (https://trialsearch.who.int) | Международный реестр клинических исследований ВОЗ | Веб + API |
| **EU Clinical Trials Register** (https://www.clinicaltrialsregister.eu) | Европейский реестр клинических исследований | Веб |
| **ISRCTN Registry** (https://www.isrctn.com) | Международный реестр исследований со сквозной нумерацией | Веб + API |
| **Chinese Clinical Trial Register** (http://www.chictr.org.cn) | Китайский реестр клинических исследований | Веб |
| **Japan Registry of Clinical Trials** (https://jrct.niph.go.jp) | Японский реестр (jRCT) | Веб |

## Генетические и молекулярные данные

| База | Описание | Доступ |
|------|----------|--------|
| **GenBank** (https://www.ncbi.nlm.nih.gov/genbank) | База генетических последовательностей (NCBI) | Веб + E-utilities API |
| **Protein Data Bank (PDB)** (https://www.rcsb.org) | 3D-структуры белков, ДНК, РНК | Веб + REST API |
| **UniProt** (https://www.uniprot.org) | База белоков — последовательности и аннотации | Веб + SPARQL + REST API |
| **dbGaP** (https://www.ncbi.nlm.nih.gov/gap) | Генотипы и фенотипы (контролируемый доступ) | Требуется авторизация |
| **OMIM** (https://omim.org) | Каталог генов и генетических фенотипов | Веб (частично API) |

## Данные реального мира (Real-World Data)

| База | Описание | Доступ |
|------|----------|--------|
| **MIMIC** (https://mimic.mit.edu) | Деидентифицированные данные пациентов ОРИТ (MIT) | Требуется сертификация PhysioNet |
| **eICU** (https://eicu-crd.mit.edu) | Данные интенсивной терапии (MIT) | Требуется сертификация PhysioNet |
| **NHANES** (https://www.cdc.gov/nchs/nhanes) | Опросы и медицинские обследования населения США (CDC) | Открытый доступ |
| **CPRD** (https://www.cprd.com) | База записей врачей общей практики (Великобритания) | Требуется лицензия |
| **Optum Clinformatics** | Данные страховых требований США | Коммерческий доступ |

## Фармакология и лекарства

| База | Описание | Доступ |
|------|----------|--------|
| **DrugBank** (https://go.drugbank.com) | Лекарства и их молекулярные мишени | Частично открыт (Free-версия) |
| **PubChem** (https://pubchem.ncbi.nlm.nih.gov) | Химические соединения, биоактивность, тесты | Веб + PUG REST API |
| **ChEMBL** (https://www.ebi.ac.uk/chembl) | Биоактивные молекулы с активностью (EMBL-EBI) | Веб + REST API |
| **DailyMed** (https://dailymed.nlm.nih.gov) | Официальные инструкции по применению (FDA) | Веб + API |
| **OpenFDA** (https://open.fda.gov) | Данные FDA: побочные эффекты, лекарства, устройства | REST API |
| **SIDER** (http://sideeffects.embl.de) | Побочные эффекты лекарств | Скачиваемый архив |

## Медицинская терминология и онтологии

| База | Описание | Доступ |
|------|----------|--------|
| **UMLS** (https://www.nlm.nih.gov/research/umls) | Unified Medical Language System (NLM) | Требуется лицензия |
| **SNOMED CT** | Международная медицинская терминология | Лицензия (частично через UMLS) |
| **ICD-10/11** (https://icd.who.int) | Международная классификация болезней (ВОЗ) | Открытый доступ |
| **MeSH** (https://www.ncbi.nlm.nih.gov/mesh) | Medical Subject Headings (NLM) | Открытый доступ |
| **LOINC** (https://loinc.org) | Лабораторные показатели и кодировки | Открытый доступ |
| **RxNorm** (https://www.nlm.nih.gov/research/umls/rxnorm) | Нормализованные названия лекарств (NLM) | Открытый доступ |

---

## Как делать запросы: я могу помочь

Я могу выполнять **программные запросы** к базам, у которых есть **открытый REST API** или **публичный веб-интерфейс** (через `webfetch`).

### Что я могу напрямую запрашивать:

| База | Метод | Что можно получить |
|------|-------|-------------------|
| **PubMed / PMC** | E-utilities API (`esearch.fcgi`, `efetch.fcgi`) | ID статей, абстракты, полные тексты |
| **ClinicalTrials.gov** | API v2 (`/api/studies`) | Информация о клинических исследованиях |
| **OpenFDA** | REST API (`/api/v1/drug/event`) | Побочные эффекты, отзывы, данные FDA |
| **DrugBank** | Web (ограниченно) | Информация о лекарствах |
| **DOAJ** | REST API | Поиск журналов и статей |
| **WHO ICTRP** | Web | Поиск клинических исследований |
| **NHANES** | Web + прямые ссылки | Данные обследований |
| **PubChem** | PUG REST API | Информация о соединениях |
| **UniProt** | REST API + SPARQL | Данные белков |
| **Europe PMC** | REST API | Статьи + патенты |

### Примеры запросов, которые я могу выполнить:

```
# Найти статьи по COVID-19 и вакцинам в PubMed
https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=covid-19+vaccine&retmax=10

# Получить информацию о клиническом исследовании по ID
https://clinicaltrials.gov/api/v2/studies/NCT04275466

# Получить побочные эффекты на парацетамол из OpenFDA
https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:acetaminophen&limit=5

# Поиск по Europe PMC
https://www.ebi.ac.uk/europepmc/api/search?query=cancer immunotherapy
```

Просто попроси — я сделаю запрос к нужной базе и верну результат.
