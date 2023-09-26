import { useEffect, useState } from "react"
import { useNavigation } from "react-router-dom";

export const useLoading = () => {

    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {

        setIsLoading(navigation.state === "loading");

    }, [navigation.state]);

    console.log(isLoading);

    return isLoading;
}