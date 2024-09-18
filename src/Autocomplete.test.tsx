import { render } from "@testing-library/react"
import {Autocomplete} from "mui-rff"
import { Form } from "react-final-form"


test("renders autocomplete", () => {
    const options = [
        {value: "1", label: "one"},
        {value: "2", label: "two"},
    ]

    const rendered = render(
        <Form
            onSubmit={() => {
            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Autocomplete name="test" label="test" options={options}/>
                </form>
            )}
        />,
    )
})