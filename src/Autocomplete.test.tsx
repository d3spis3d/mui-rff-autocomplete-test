import { render } from "@testing-library/react"
import {Autocomplete} from "mui-rff"
import { Form } from "react-final-form"


test("renders autocomplete", () => {
    const initialOptions = [
        { value: 'Hello', label: 'Hello' },
        { value: 'World', label: 'World' },
        { value: 'Out', label: 'Out' },
        { value: 'There', label: 'There' },
    ];

    const initialValues = {
        test: initialOptions[0].value,
    };

    const initialGetOptionValue = (option: any) => option.value;
    const initialGetOptionLabel = (option: any) => option.label;

    const rendered = render(
        <Form
            onSubmit={() => {
            }}
            initialValues={initialValues}

            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Autocomplete
                        name="test"
                        label="test"
                        options={initialOptions}
                        getOptionValue={initialGetOptionValue}
                        getOptionLabel={initialGetOptionLabel}
                        textFieldProps={{ margin: 'normal' }}
                        required={true}
                    />
                </form>
            )}
        />,
    )
})
