import React, { useState } from "react";
import "./Timezone.css";

const Timezone = () => {
  const [timezone, setTimezone] = useState("+00");

  return (
    <div className="timezone">
      <label htmlFor="timezone" className="label-timezone">
        Time Zone
      </label>
      <select
        id="timezone"
        className="input-timezone"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      >
        <option value="-12">-12 GMT</option>
        <option value="-11">-11 GMT</option>
        <option value="-10">-10 GMT</option>
        <option value="-09">-09 GMT</option>
        <option value="-08">-08 GMT</option>
        <option value="-07">-07 GMT</option>
        <option value="-06">-06 GMT</option>
        <option value="-05">-05 GMT</option>
        <option value="-04">-04 GMT</option>
        <option value="-03">-03 GMT</option>
        <option value="-02">-02 GMT</option>
        <option value="-01">-01 GMT</option>
        <option value="+00" selected>
          +00 GMT
        </option>
        <option value="+01">+01 GMT</option>
        <option value="+02">+02 GMT</option>
        <option value="+03">+03 GMT</option>
        <option value="+04">+04 GMT</option>
        <option value="+05">+05 GMT</option>
        <option value="+06">+06 GMT</option>
        <option value="+07">+07 GMT</option>
        <option value="+08">+08 GMT</option>
        <option value="+09">+09 GMT</option>
        <option value="+10">+10 GMT</option>
        <option value="+11">+11 GMT</option>
        <option value="+12">+12 GMT</option>
        <option value="+13">+13 GMT</option>
        <option value="+14">+14 GMT</option>
      </select>
    </div>
  );
};

export default Timezone;
