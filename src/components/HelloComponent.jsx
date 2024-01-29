export default function HelloComponent() {
    const date = new Date();

    if (date.getHours() < 12) {
        return (
            <h1 className="font-semibold text-3xl mt-10">
                Good Morning
            </h1>
        );
    } else if (date.getHours() >= 18) {
        return (
            <h1 className="font-semibold text-3xl mt-10">
                Good Evening
            </h1>
        );
    } else {
        return (
            <h1 className="font-semibold text-3xl mt-10">
                Good Afternoon
            </h1>
        );
    }
}