<template>
    <main class="main">
        <section class="mainText">
            <p>What is a TO-DO list and how can it help in business and daily life?

                Do any of the following seem familiar?
            </p>
            <ul>
                <li>
                    You often feel completely overwhelmed with the amount of work you’ve got to do.
                </li>
                <li>
                    You sometimes forget to do things that are important.
                </li>
                <li>
                    People have to chase you to get things done.
                </li>
                <li>
                    You find it a struggle to keep to deadlines.
                </li>
            </ul>
            <p id="secondParagraph">
                Don’t think you’re unusual because there are thousands of people who struggle with the same every day,
                not
                just in the workplace but in their personal life too. Luckily, there is something very simple you can do
                to
                keep your life and work more organised.
            </p>
        </section>

        <router-link to="/list">
            <button>Get Started!</button>
        </router-link>
    </main>
</template>

<style scoped>
#secondParagraph {
    margin-left: 15px;
    margin-right: 15px;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    min-height: 50vh;
    text-overflow: ellipsis;
}

ul {
    text-align: left;
    align-items: left;
    padding-left: 25px;
}

button {
    background-color: #5f493d;
    border: none;
    color: white;
    padding: 5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    border-radius: 8px;
}

p {
    text-align: center;
}
</style>
