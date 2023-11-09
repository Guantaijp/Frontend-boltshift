import { useState } from 'react'
// import apple from '../../assets/checkout/Social button (1).svg'
// import facebook from '../../assets/checkout/Social button (2).svg'
// import email from '../../assets/checkout/Social button (3).svg'
// import google from '../../assets/checkout/Social button.svg'
import detail from '../../assets/profile/file-02.svg'
import address from '../../assets/profile/marker-pin-01.svg'
import SelectDemo from './SelectDemo';
import DatePickerDemo from './DatePickerDemo';
import Navbar from '../Navbar.tsx'
import gear from '../../assets/profile/Gear.svg'
import AccountLayout from './AccountLayout.tsx'
import Footer from '../Footer.tsx'
import TextInput from '../reusablecomponents/TextInput.tsx'
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import social from '../../assets/checkout/Social button.svg'
import social2 from '../../assets/checkout/Social button (1).svg'
import social3 from '../../assets/checkout/Social button (2).svg'
import social4 from '../../assets/checkout/Social button (3).svg'




function AccountDetails() {

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [confirmType, setConfirmType] = useState("password");
  const [confirmIcon, setConfirmIcon] = useState(eyeOff);

  const [oldType, setOldType] = useState("password");
  const [oldIcon, setOldIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  const handleToggleConfirm = () => {
    if (confirmType === "password") {
      setConfirmIcon(eye);
      setConfirmType("text");
    } else {
      setConfirmIcon(eyeOff);
      setConfirmType("password");
    }
  };
  const handleToggleOld = () => {
    if (oldType === "password") {
      setOldIcon(eye);
      setOldType("text");
    } else {
      setOldIcon(eyeOff);
      setOldType("password");
    }
  }





  return (
    <>
        <Navbar />
      <div className="mx-4">
        <div className=" flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-3 p-4">
          <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
          >
            <path
                d="M6.66667 14.1668H13.3333M9.18141 2.30345L3.52949 6.69939C3.15168 6.99324 2.96278 7.14017 2.82669 7.32417C2.70614 7.48716 2.61633 7.67077 2.56169 7.866C2.5 8.08639 2.5 8.3257 2.5 8.80433V14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3185C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3185C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V8.80433C17.5 8.3257 17.5 8.08639 17.4383 7.866C17.3837 7.67077 17.2939 7.48716 17.1733 7.32417C17.0372 7.14017 16.8483 6.99324 16.4705 6.69939L10.8186 2.30345C10.5258 2.07574 10.3794 1.96189 10.2178 1.91812C10.0752 1.87951 9.92484 1.87951 9.78221 1.91812C9.62057 1.96189 9.47418 2.07574 9.18141 2.30345Z"
                stroke="#475467"
                stroke-width={2}
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
            >
              <path
                  d="M6 12L10 8L6 4"
                  stroke="#D0D5DD"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#475467]">
                Account
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
            >
              <path
                  d="M6 12L10 8L6 4"
                  stroke="#D0D5DD"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative pr-4">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#870064]">
                Personal Info
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-[72px] p-4 bg-white">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-1">
            <img src={gear} />
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-center text-black">
              Account
            </p>
          </div>
        </div>
        <div className=" flex">
          <AccountLayout />
      <div className=" xs:mx-4 justify-center items-start flex-grow relative gap-12">
        <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 py-4">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 bg-white">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <img src={detail} alt="detail" />

              <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black">
                Basic Details
              </p>
            </div>
          </div>

          <div className="  gap-10 py-2 bg-white">
            <div className=" flex flex-col justify-center items-start flex-grow relative gap-4">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-black">
                Sign in with:
              </p>
              <div className="grid grid-cols-2 2xl:flex xl:flex  gap-2">
                <img src={social} alt="social" />
                <img src={social2} alt="social" />
                <img src={social3} alt="social" />
                <img src={social4} alt="social" />
              </div>
            </div>
          </div>

          <div className="">
          <div className="sm:my-2 my-4 flex  md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col   gap-4 ">
            <div className="2xl:w-[416px] xl:w-[350px] lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
            <TextInput label="First Name" placeholder="First Name" type="text" />
            </div>
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <TextInput label="Last Name" placeholder="Last Name" type="text" />
            </div>
          </div>
          <div className="sm:my-2 my-4 flex  md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col   gap-4 ">
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <label className="flex-grow-0  flex-shrink-0 text-xs font-medium text-left text-[#344054]">Birthday</label>
              <DatePickerDemo />
            </div>
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <TextInput label="Phone Number" placeholder="Phone Number" type="number" />
            </div>
          </div>
          <div className="sm:my-2 my-4 flex  md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col   gap-4 ">
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <TextInput label="Email" placeholder="Email" type="email" />
            </div>
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">Gender</label>
              <SelectDemo />
            </div>
          </div>

            <div >
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 py-4">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 bg-white">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <img src={address} alt="address" />
              <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black">Address</p>
            </div>
          </div>
          <div className="sm:my-2 flex md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col gap-4">
            <TextInput label="Apartment Details" placeholder="Apartment Details" type="text"  />
            <TextInput label="Street Address" placeholder="Street Address" type="text"  />
          </div>
          <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col  gap-4 ">  <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
            <TextInput label="Country" placeholder="Country" type="text" />
          </div>
            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <TextInput label="City/Town" placeholder="City/Town" type="text" />
            </div>
          </div>
          <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
            <TextInput label="Postal code" placeholder="Postal code" type="text" />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8 py-4">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2">
            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 bg-white">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M22 11V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.71569 21.2843 5.40973 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.71569 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V11.8C2 12.9201 2 13.4802 2.21799 13.908C2.40973 14.2843 2.71569 14.5903 3.09202 14.782C3.51984 15 4.0799 15 5.2 15H11M12 10H12.005M17 10H17.005M7 10H7.005M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M12.25 10C12.25 10.1381 12.1381 10.25 12 10.25C11.8619 10.25 11.75 10.1381 11.75 10C11.75 9.86193 11.8619 9.75 12 9.75C12.1381 9.75 12.25 9.86193 12.25 10ZM17.25 10C17.25 10.1381 17.1381 10.25 17 10.25C16.8619 10.25 16.75 10.1381 16.75 10C16.75 9.86193 16.8619 9.75 17 9.75C17.1381 9.75 17.25 9.86193 17.25 10ZM7.25 10C7.25 10.1381 7.13807 10.25 7 10.25C6.86193 10.25 6.75 10.1381 6.75 10C6.75 9.86193 6.86193 9.75 7 9.75C7.13807 9.75 7.25 9.86193 7.25 10ZM15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
                    stroke="#870064"
                    stroke-width={2}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-black">
                  Password
                </p>
              </div>
            </div>
          </div>
          <div className="sm:my-2 flex  md:flex-wrap sm:flex-wrap xs:flex-col sm:flex-col md:flex-col  gap-4 ">

            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">Old Password</label>
              <div className="relative w-full">
                <input
                  className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                  type={oldType}
                  name="Old Password"
                  placeholder="Enter Old Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggleOld}>
               <img src={oldIcon} alt="icon" />
                </span>
              </div>
            </div>

            <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
              <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">New Password</label>
              <div className="relative w-full">
                <input
                  className="put appearance-none w-full border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                  type={type}
                  name="New Password"
                  placeholder=" New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggle}>
                  <img src={icon} alt="icon" />
                </span>
              </div>
            </div>
          </div>
          <div className="2xl:w-[416px] xl:w-[350px]  lg:w-[250px] md:w-[350px] sm:w-[336px] xs:w-[336px] flex flex-col gap-1.5">
            <label className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#344054]">Confirm Password</label>
            <div className="relative w-full">
              <input
                className="put w-full  border border-[#d0d5dd] rounded-md py-2 px-3 text-black pr-8 focus:outline-none"
                type={confirmType}
                name="Confirm Password"
                placeholder=" Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="current-password"
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" onClick={handleToggleConfirm}>
                <img src={confirmIcon} alt="icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-1 py-6 bg-white border-t border-r-0 border-b-0 border-l-0 border-[#eaecf0] ">
          <div
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-5 py-3 rounded-lg bg-[#66004b] border-0 border-[#66004b] 2xl:w-[336px] xl:w-[336px] min-w-[160px]"
            style={{ boxShadow: "0px 1px 2px 0 rgba(16,24,40,0.05)" }}
          >
            <svg
              width={21}
              height={20}
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M6.33333 2.5V5.33333C6.33333 5.80004 6.33333 6.0334 6.42416 6.21166C6.50406 6.36846 6.63154 6.49594 6.78834 6.57584C6.9666 6.66667 7.19996 6.66667 7.66667 6.66667H13.3333C13.8 6.66667 14.0334 6.66667 14.2117 6.57584C14.3685 6.49594 14.4959 6.36846 14.5758 6.21166C14.6667 6.0334 14.6667 5.80004 14.6667 5.33333V3.33333M14.6667 17.5V12.1667C14.6667 11.7 14.6667 11.4666 14.5758 11.2883C14.4959 11.1315 14.3685 11.0041 14.2117 10.9242C14.0334 10.8333 13.8 10.8333 13.3333 10.8333H7.66667C7.19996 10.8333 6.9666 10.8333 6.78834 10.9242C6.63154 11.0041 6.50406 11.1315 6.42416 11.2883C6.33333 11.4666 6.33333 11.7 6.33333 12.1667V17.5M18 7.77124V13.5C18 14.9001 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4001 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36502 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9001 3 13.5V6.5C3 5.09987 3 4.3998 3.27248 3.86502C3.51217 3.39462 3.89462 3.01217 4.36502 2.77248C4.8998 2.5 5.59987 2.5 7 2.5H12.7288C13.1364 2.5 13.3402 2.5 13.5321 2.54605C13.7021 2.58688 13.8647 2.65422 14.0138 2.7456C14.182 2.84867 14.3261 2.9928 14.6144 3.28105L17.219 5.88562C17.5072 6.17387 17.6513 6.318 17.7544 6.48619C17.8458 6.63531 17.9131 6.79789 17.9539 6.96795C18 7.15976 18 7.36358 18 7.77124Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">
              Save Changes
            </p>
          </div>
        </div>
        </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      <Footer/>
    </>

    );
}

export default AccountDetails
