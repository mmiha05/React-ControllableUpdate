# React-ControllableUpdate

A small wrapper for component for `React.memo` that prevents component from being updated.

### Usage

To use, simply import component and define if component should be updated via `locked` prop.

```tsx
<ControllableUpdate locked={false}>// --- children ---</ControllableUpdate>
```

### Component updates

Component will update if

- `locked` prop is `true`
- `locked` prop was `false` but then changed to `true`

**Note**: Just like with `React.memo` children components will be updated if they're updated within their state

### Why not just use `React.memo`?

Most of the times this would be good point but sometimes you might want advantages of this approach because:

- If you want component memoized in just a single place, this will do.
- If you do not want to pass all logic to props, this will do, you can calculate value `locked` prop easily.
- Allows just part/fragment of the component to be prevented from updating easily.

### License

This project is licensed under the MIT License. Copy of license can be found in repository root.
