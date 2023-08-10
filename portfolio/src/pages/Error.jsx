import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    return (
        <section>
            <h2>Error</h2>
            <p>This is an Error Message</p>
        </section>
    );
}