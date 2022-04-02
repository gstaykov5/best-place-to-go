import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >

      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
        />
    </MuiPickersUtilsProvider>
  );
};

export default StaticDatePicker;
