export const test = [
  {
    "id": "0",
    "term": "Переиспользуемые компоненты",
    "definition": "Компоненты пользовательского интерфейса, разработанные с учетом многократного использования в различных проектах без изменения их внутренней логики.",
    "source": "Reusable Software Components: Concepts and Practices",
    "childs": [
      {
        "child": "Контекстно-независимый компонент",
        "relation": "относится к"
      },
      {
        "child": "Контекстно-зависимый компонент",
        "relation": "относится к"
      },
      {
        "child": "Состояние",
        "relation": "есть у"
      }
    ]
  },
  {
    "id": "1",
    "term": "Библиотека компонентов",
    "definition": "Набор переиспользуемых пользовательских интерфейсных компонентов, обеспечивающий единообразие и ускоряющий разработку.",
    "source": "Component-Based Software Engineering: Putting the Pieces Together",
    "childs": [
      {
        "child": "Переиспользуемые компоненты",
        "relation": "содержатся в"
      },
      {
        "child": "React",
        "relation": "используется для"
      }
    ]
  },
  {
    "id": "2",
    "term": "Архитектура приложения",
    "definition": "Структурный дизайн программного обеспечения, определяющий его основные модули, взаимодействие и способы расширения.",
    "source": "Software Architecture in Practice",
    "childs": [
      {
        "child": "Масштабируемость",
        "relation": "зависит от"
      },
      {
        "child": "Композиция компонентов",
        "relation": "зависит от"
      },
      {
        "child": "Атомарный дизайн",
        "relation": "может использоваться в"
      }
    ]
  },
  {
    "id": "3",
    "term": "Масштабируемость",
    "definition": "Способность системы эффективно адаптироваться к увеличению нагрузки или объема данных.",
    "source": "Scalability of Software Systems: Principles and Practice",
    "childs": []
  },
  {
    "id": "4",
    "term": "Контекстно-зависимый компонент",
    "definition": "Компонент, логика работы которого зависит от внешнего окружения, состояния или параметров приложения.",
    "source": "Context-Aware Computing: A Review of Software Engineering Approaches",
    "childs": [
      {
        "child": "Контекст API",
        "relation": "используется в"
      }
    ]
  },
  {
    "id": "5",
    "term": "Контекстно-независимый компонент",
    "definition": "Компонент, работающий автономно, без привязки к глобальному состоянию или окружению.",
    "source": "Modularization and Reusability in Software Components",
    "childs": []
  },
  {
    "id": "6",
    "term": "Композиция компонентов",
    "definition": "Подход к построению интерфейсов, при котором сложные компоненты формируются из простых, переиспользуемых элементов.",
    "source": "Component Composition Techniques in Software Engineering",
    "childs": [
      {
        "child": "Переиспользуемые компоненты",
        "relation": "используются в"
      }
    ]
  },
  {
    "id": "7",
    "term": "Атомарный дизайн",
    "definition": "Методология проектирования интерфейсов, основанная на создании UI из минимальных, атомарных компонентов.",
    "source": "Atomic Design by Brad Frost",
    "childs": []
  },
  {
    "id": "8",
    "term": "Контекст API",
    "definition": "Механизм React для передачи данных между компонентами без явного проброса через пропсы.",
    "source": "React Official Documentation",
    "childs": []
  },
  {
    "id": "9",
    "term": "Состояние",
    "definition": "Набор данных, описывающий текущее состояние компонента или приложения.",
    "source": "State Management in Component-Based UI Frameworks",
    "childs": []
  },
  {
    "id": "10",
    "term": "Тестирование компонентов",
    "definition": "Методология проверки работы отдельных UI-компонентов с целью обеспечения их корректности.",
    "source": "Testing Strategies for Component-Based Software Development",
    "childs": [
      {
        "child": "Библиотека компонентов",
        "relation": "необходимо для"
      }
    ]
  },
  {
    "id": "11",
    "term": "React",
    "definition": "Библиотека JavaScript для построения пользовательских интерфейсов на основе компонентов.",
    "source": "React Official Documentation",
    "childs": [
      {
        "child": "TypeScript",
        "relation": "может использоваться в"
      }
    ]
  },
  {
    "id": "12",
    "term": "TypeScript",
    "definition": "Язык программирования, добавляющий статическую типизацию в JavaScript.",
    "source": "TypeScript Handbook",
    "childs": []
  },
  {
    "id": "13",
    "term": "StoryBook",
    "definition": "Инструмент для изолированной разработки и тестирования UI-компонентов.",
    "source": "Storybook Documentation",
    "childs": [
      {
        "child": "Библиотека компонентов",
        "relation": "используется для демонстрации"
      }
    ]
  },
  {
    "id": "17",
    "term": "Cycle Time",
    "definition": "Метрика, измеряющая время, необходимое для завершения одного полного цикла разработки компонента.",
    "source": "Measuring and Improving Development Cycle Time in Agile Software Projects",
    "childs": [
      {
        "child": "Библиотека компонентов",
        "relation": "улучшается благодаря"
      }
    ]
  }
]
