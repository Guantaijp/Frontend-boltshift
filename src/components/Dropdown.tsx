import user from '../assets/User Avatar.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import shield from '../assets/Catalog/shield-dollar.svg'
import shopping from '../assets/Catalog/shopping-bag-02.svg'
import reciept from '../assets/Catalog/receipt-check.svg'
import user1 from '../assets/Catalog/user-02.svg'
import { Link } from 'react-router-dom';
import Popover from './Popover.tsx'


function Dropdown() {


  return (
    <>
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white outline-fuchsia-300"
            aria-label="Customise options"
          >
            <img src={user} alt="user-avatar" className="flex-grow-0 flex-shrink-0 w-8 h-8 relative overflow-hidden rounded-[44px] bg-cover bg-no-repeat bg-center" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
              style={{
                boxShadow:'0px 24px 48px -12px rgba(16, 24, 40, 0.18)' ,
          }}
            className=" w-64 px-3 my-4 bg-white rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
            align='end'
          >

            <div className="flex  my-4 justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 m-2">
              <img src={user} width="42" height="42" />
              <div className="flex flex-col justify-start items-start flex-grow relative">
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[156px] text-sm font-semibold text-left text-[#344054]">
                  Paul Mbingu
                </p>
                <p className="self-stretch flex-grow-0 flex-shrink-0 w-[156px] text-sm text-left text-[#475467]">
                  paul@excite.company
                </p>
              </div>
            </div>
            <div className="gap-3 my-4">
            <svg
                width="232"
                height="1"
                viewBox="0 0 232 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-stretch flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
            >
              <line y1="0.5" x2="232" y2="0.5" stroke="#F2F4F7"></line>
            </svg>
    </div>
            <Link to='/account/profile'>
            <DropdownMenu.CheckboxItem className="group gap-2 mt-0 p-4 rounded-lg text-[13px] leading-none text-sm font-medium text-left text-[#344054] flex items-center relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#66004B]">
              <img src={user1} alt="check icon" />
              Personal Info
            </DropdownMenu.CheckboxItem>
            </Link>
              <Link to='/account/orders'>
            <DropdownMenu.CheckboxItem className="group gap-2 p-4 rounded-lg  text-[13px] leading-none text-sm font-medium text-left text-[#344054] flex items-center relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#66004B]">
              <img  src={shopping} alt="check icon" />
              Orders
            </DropdownMenu.CheckboxItem>
                  </Link>
              <Link to='/account/payment'>
            <DropdownMenu.CheckboxItem className="group gap-2 p-4 rounded-lg   text-[13px] leading-none text-sm font-medium text-left text-[#344054] flex items-center relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#66004B]">
              <img  src={shield} alt="check icon" />
              Payments
            </DropdownMenu.CheckboxItem>
              </Link>
              <Link to='/account/voucher'>
            <DropdownMenu.CheckboxItem className="group gap-2 p-4 rounded-lg   text-[13px] leading-none text-sm font-medium text-left text-[#344054] flex items-center relative pl-[10px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#66004B]">
              <img src={reciept} alt="check icon" />
              Vouchers
            </DropdownMenu.CheckboxItem>
              </Link>
            <DropdownMenu.Separator className="h-[1px] my-2  bg-gray-200 " />
            <Popover />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      </div>
    </>

  )
}

export default Dropdown
