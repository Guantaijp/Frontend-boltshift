import fb from "../../assets/fb_messenger.svg"
import email from "../../assets/gmail.svg"
import messages from "../../assets/messages.svg"
import whatsapp from "../../assets/whatsapp.svg"
import telegram from "../../assets/telegram.svg"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Share = () => {

  return (
<DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className=" inline-flex items-center justify-center text-violet11 bg-white my-1 outline-none "
            aria-label="Customise options"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.15833 11.2582L12.85 14.5748M12.8417 5.42484L7.15833 8.7415M17.5 4.1665C17.5 5.54722 16.3807 6.6665 15 6.6665C13.6193 6.6665 12.5 5.54722 12.5 4.1665C12.5 2.78579 13.6193 1.6665 15 1.6665C16.3807 1.6665 17.5 2.78579 17.5 4.1665ZM7.5 9.99984C7.5 11.3805 6.38071 12.4998 5 12.4998C3.61929 12.4998 2.5 11.3805 2.5 9.99984C2.5 8.61913 3.61929 7.49984 5 7.49984C6.38071 7.49984 7.5 8.61913 7.5 9.99984ZM17.5 15.8332C17.5 17.2139 16.3807 18.3332 15 18.3332C13.6193 18.3332 12.5 17.2139 12.5 15.8332C12.5 14.4525 13.6193 13.3332 15 13.3332C16.3807 13.3332 17.5 14.4525 17.5 15.8332Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="mx-2 flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-[#667085]">
                Share
              </p>
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className=" w-48  bg-white rounded-lg p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
            align='center'
          >
            <DropdownMenu.CheckboxItem
              className="group m-3 text-sm font-medium text-left rounded-lg flex items-center  relative gap-2 p-2 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D] "
            >
              <img  src={whatsapp} alt="check icon" />
              WhatsApp
            
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.CheckboxItem
              className="group m-3 text-sm font-medium text-left rounded-lg flex items-center  relative gap-2 p-2 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D] "
            >
              <img src={messages} alt="check icon" />
              Messages
             
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.CheckboxItem
              className="group m-3 text-sm font-medium text-left rounded-lg flex items-center  relative gap-2 p-2 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D] "
            >
              <img  src={fb} alt="check icon" />
             Facebook
              
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.CheckboxItem
              className="group m-3 text-sm font-medium text-left rounded-lg flex items-center  relative gap-2 p-2 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D] "
            >
              <img  src={telegram} alt="check icon" />
              Telegram
              
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.CheckboxItem
              className="group m-3 text-sm font-medium text-left rounded-lg flex items-center  relative gap-2 p-2 select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#FFF0FB] data-[highlighted]:text-[#870064] text-[#0C111D] "
            >
              <img  src={email} alt="check icon" />
              Email
              
            </DropdownMenu.CheckboxItem>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
  )
}
