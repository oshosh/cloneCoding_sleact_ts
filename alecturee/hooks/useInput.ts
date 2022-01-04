import { Dispatch, SetStateAction, useCallback, useState } from "react"

// https://velog.io/@j35148/sleact-2.-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EA%B8%B0%EB%8A%A5
type ReturnTypes<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>]

const useInput = <T = any>(initialData: T): ReturnTypes<T> => {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, [])
    return [value, handler, setValue]
}

export default useInput;