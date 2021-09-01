import React from "react";
import 'date-fns';
import ReactDatePicker from "react-datepicker";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm, Controller } from "react-hook-form";

const DatePicker = () =>{
  const { handleSubmit, control } = useForm();

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>

            <form onSubmit={handleSubmit(data => console.log(data))}>
                <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                    <ReactDatePicker
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                    />
                    )}
                />
            
                <input type="submit" />
            </form>
        </div>
    );
}

export default DatePicker;