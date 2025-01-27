import os
from pymongo import MongoClient

mongoURL = os.getenv('MONGOURL', 'mongodb://localhost:27017')
client = MongoClient(mongoURL)
database = client['diplomGlossary3']
collection = database['glossary']

if collection.count_documents({"term": "react"}) == 0:
    glossary = [
  {
    "term": "переиспользуемые компоненты",
    "definition": "Компоненты пользовательского интерфейса, разработанные с учетом многократного использования в различных проектах без изменения их внутренней логики.",
    "source": "https://sanse.ru/index.php/sanse/article/view/575",
    "childs": [
      {
        "child": "контекстно-независимый компонент",
        "relation": "относится к"
      },
      {
        "child": "контекстно-зависимый компонент",
        "relation": "относится к"
      },
      {
        "child": "состояние",
        "relation": "есть у"
      }
    ]
  },
  {
    "term": "библиотека компонентов",
    "definition": "Набор переиспользуемых пользовательских интерфейсных компонентов, обеспечивающий единообразие и ускоряющий разработку.",
    "source": "https://elibrary.ru/item.asp?id=54697072",
    "childs": [
      {
        "child": "переиспользуемые компоненты",
        "relation": "содержатся в"
      },
      {
        "child": "react",
        "relation": "используется для"
      }
    ]
  },
  {
    "term": "архитектура приложения",
    "definition": "Структурный дизайн программного обеспечения, определяющий его основные модули, взаимодействие и способы расширения.",
    "source": "https://na-journal.ru/pdf/nauchnyi_aspekt_1-2024_t40_web.pdf#page=55",
    "childs": [
      {
        "child": "масштабируемость",
        "relation": "зависит от"
      },
      {
        "child": "композиция компонентов",
        "relation": "зависит от"
      },
      {
        "child": "атомарный дизайн",
        "relation": "может использоваться в"
      }
    ]
  },
  {
    "term": "масштабируемость",
    "definition": "Способность системы эффективно адаптироваться к увеличению нагрузки или объема данных.",
    "source": "https://elibrary.ru/item.asp?id=54517884",
    "childs": []
  },
  {
    "term": "контекстно-зависимый компонент",
    "definition": "Компонент, логика работы которого зависит от внешнего окружения, состояния или параметров приложения.",
    "source": "https://cyberleninka.ru/article/n/komponentnoe-programmirovanie",
    "childs": [
      {
        "child": "контекст API",
        "relation": "используется в"
      }
    ]
  },
  {
    "term": "контекстно-независимый компонент",
    "definition": "Компонент, работающий автономно, без привязки к глобальному состоянию или окружению.",
    "source": "https://cyberleninka.ru/article/n/komponentnoe-programmirovanie",
    "childs": []
  },
  {
    "term": "композиция компонентов",
    "definition": "Подход к построению интерфейсов, при котором сложные компоненты формируются из простых, переиспользуемых элементов.",
    "source": "https://cyberleninka.ru/article/n/komponentnoe-programmirovanie",
    "childs": [
      {
        "child": "переиспользуемые компоненты",
        "relation": "используются в"
      }
    ]
  },
  {
    "term": "атомарный дизайн",
    "definition": "Методология проектирования интерфейсов, основанная на создании UI из минимальных, атомарных компонентов.",
    "source": "https://elibrary.ru/item.asp?id=54309541",
    "childs": []
  },
  {
    "id": "8",
    "term": "контекст API",
    "definition": "Механизм React для передачи данных между компонентами без явного проброса через пропсы.",
    "source": "https://ru.react.js.org/docs/context.html",
    "childs": []
  },
  {
    "term": "состояние",
    "definition": "Набор данных, описывающий текущее состояние компонента или приложения.",
    "source": "https://react.dev/learn/state-a-components-memory",
    "childs": []
  },
  {
    "term": "тестирование компонентов",
    "definition": "Методология проверки работы отдельных UI-компонентов с целью обеспечения их корректности.",
    "source": "https://www.netguru.com/blog/front-end-testing",
    "childs": [
      {
        "child": "библиотека компонентов",
        "relation": "необходимо для"
      }
    ]
  },
  {
    "term": "react",
    "definition": "Библиотека JavaScript для построения пользовательских интерфейсов на основе компонентов.",
    "source": "https://react.dev/",
    "childs": [
      {
        "child": "typeScript",
        "relation": "может использоваться в"
      }
    ]
  },
  {
    "term": "typeScript",
    "definition": "Язык программирования, добавляющий статическую типизацию в JavaScript.",
    "source": "TypeScript Handbook",
    "childs": []
  },
  {
    "term": "storyBook",
    "definition": "Инструмент для изолированной разработки и тестирования UI-компонентов.",
    "source": "Storybook Documentation",
    "childs": [
      {
        "child": "библиотека компонентов",
        "relation": "используется для демонстрации"
      }
    ]
  },
  {
    "term": "cycle Time",
    "definition": "Метрика, измеряющая время, необходимое для завершения одного полного цикла разработки компонента.",
    "source": "Measuring and Improving Development Cycle Time in Agile Software Projects, IEEE Transactions on Software Engineering",
    "childs": [
      {
        "child": "библиотека компонентов",
        "relation": "улучшается благодаря"
      }
    ]
  }
]
    collection.insert_many(glossary)