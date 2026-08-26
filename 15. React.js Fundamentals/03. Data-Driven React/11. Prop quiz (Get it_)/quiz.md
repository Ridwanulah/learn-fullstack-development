1. What do props help us accomplish?

It helps write DRYer code, and more dynamic code

2. How do you pass a prop into a component?

By adding custom attributes to the function callback

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

We can't add custom to props to HTML elements because they are not in the HTML spec

4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            {props.something}
            ...
        </header>
    )
}


5. What data type is `props` when the component receives it?
An object
