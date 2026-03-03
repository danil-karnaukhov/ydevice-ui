# YDeviceUI

YDeviceUI — это библиотека React-компонентов, созданная в рамках учебного проекта по разработке интернет-магазина цифровой техники [YDevice](https://github.com/danil-karnaukhov/ydevice).

## Установка

```
npm install ydevice-ui
```

## Начало работы

Для работы с библиотекой нужно подключить стили в точке входа (entry file) приложения:

```tsx
// src/main.tsx или src/index.tsx

import 'ydevice-ui/styles/fonts.css'
import 'ydevice-ui/styles/index.css'

// ...
```

После подключения стилей можно использовать компоненты:

```tsx
import { Button } from 'ydevice-ui'

export const App = () => (
  <div>
    <h2>Добро пожаловать!</h2>
    <Button>Начать</Button>
  </div>
)
```

## Разработка

Для локального запуска проекта выполните следующие действия:

1. Клонируйте репозиторий

```
git clone https://github.com/danil-karnaukhov/ydevice-ui.git
cd ydevice-ui
```

2. Установите зависимости

```
npm ci
```

3. Запустите Storybook

```
npm run storybook
```
