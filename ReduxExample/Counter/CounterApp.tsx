import { Provider } from "react-redux"
import store from "../store"
import Counter from "./Counter"
import CounterScreen from "./CounterScreen"


const CounterApp = () => {

    return (
        <Provider store={store}>
            <CounterScreen />
        </Provider>
    )
}
export default CounterApp;