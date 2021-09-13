# Hooks

## 📦 Установка

```bash
yarn add @test-utils-release/hooks
```

## 🔨 Использование

```jsx
import { usePrevious } from '@test-utils-release/hooks';
```

## Состав

### usePrevious

Предыдущее состояние из useState
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Сейчас: {count}, до этого: {prevCount}</h1>;
}
```

### useEventCallback

https://github.com/facebook/react/issues/14099#issuecomment-440013892

### useClickOutside

Подписка на событие `mousedown`, `touchstart`. При нажатии вне элемента вызывает переданный callback

### useKeydownOutside

Подписка на событие `keydown`. При нажатии вне элемента вызывает переданный callback

### useFocus

Подписка на событие `focusin`, `focusout` для конкретного события фокуса (клавиатура/мышка).
Возвращает true/false о состоянии фокуса на элементе или на одном из его дочерних элементов

### useDidUpdateEffect

Вызывает коллбэк при изменении значений, переданных в зависимостях.
В отличии от useEffect — пропускает начальный рендер (аналог ComponentDidUpdate).