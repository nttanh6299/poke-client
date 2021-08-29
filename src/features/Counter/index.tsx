import { useSelector, useDispatch } from 'app/hook'
import { Helmet } from 'react-helmet'
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice'

function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <Helmet>
        <title>Counter</title>
      </Helmet>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <div>
        <button
          aria-label="Decrement value async"
          onClick={() => dispatch(incrementAsync(5))}
        >
          + 5 async
        </button>
      </div>
    </div>
  )
}

export default Counter
