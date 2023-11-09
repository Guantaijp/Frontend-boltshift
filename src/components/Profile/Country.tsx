import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



function Country() {

    const [, setPhone] = useState("");

  return (
    <div>
        <PhoneInput
        country={"us"} // Set default country
      
        onChange={setPhone}
        inputStyle={{ width: "100%" }}
        containerStyle={{ maxWidth: "300px" }}
      />
    </div>
  )
}

export default Country
