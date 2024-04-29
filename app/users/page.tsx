export default async function UserPage() {
    const response = await fetch("https://api.github.com/users/maxjeon97");
    const userData = await response.json();

    return (
        <h2>This is {userData.name}'s data page!</h2>
    );
}