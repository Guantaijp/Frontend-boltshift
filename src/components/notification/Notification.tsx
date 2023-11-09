import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import ReadTable from './ReadTable';
import UnreadTable from './UnreadTable';
import AllTable from './AllTable';
import * as Tabs from '@radix-ui/react-tabs';

const tabData = [
    {
        label: 'Unread',
        value: 'tab1',
        color: '#1570EF',
        count: {
            number: 100,
            colorbg: '#D1E9FF'
        }

    },
    {
        label: 'Read',
        value: 'tab2',
        color: '#66004B',
        count: {
            number: 10,
            colorbg: '#FFE0F7'

        },
    },
    {
        label: 'All',
        value: 'tab3',
        color: '#E04F16',
        count: {
            number: 39,
            colorbg: '#FDEAD7'
        }

    }
]

const Notification = () => {
    return (
        <>
            <div className="gap-8">

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <div className="flex-grow-0 flex-shrink-0 w-10 h-10 relative rounded-[512px]">
                            <svg
                                className='absolute left-[2px]  p-1  w-8 h-8  rounded-2xl hover:bg-[#FFE0F7]'
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.0008 21H10.0008M18.0008 8C18.0008 6.4087 17.3686 4.88258 16.2434 3.75736C15.1182 2.63214 13.5921 2 12.0008 2C10.4095 2 8.88333 2.63214 7.75811 3.75736C6.63289 4.88258 6.00075 6.4087 6.00075 8C6.00075 11.0902 5.22122 13.206 4.35042 14.6054C3.61588 15.7859 3.24861 16.3761 3.26208 16.5408C3.27699 16.7231 3.31561 16.7926 3.46253 16.9016C3.59521 17 4.19334 17 5.38961 17H18.6119C19.8082 17 20.4063 17 20.539 16.9016C20.6859 16.7926 20.7245 16.7231 20.7394 16.5408C20.7529 16.3761 20.3856 15.7859 19.6511 14.6054C18.7803 13.206 18.0008 11.0902 18.0008 8Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="justify-center items-center w-5 h-5 absolute left-[17px] top-[-11px] p-1 rounded-2xl bg-[#c644a3]">
                                <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-center text-white">3</p>
                            </div>
                        </div>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content
                            style={{
                                boxShadow: '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
                                width: 480
                            }}
                            className="min-w-[220px] my-4 bg-white border rounded-md p-[5px]  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                            sideOffset={5}
                            align='end'
                        >

                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 m-2">

                                <div className="flex flex-col justify-start items-start flex-grow relative">

                                </div>
                            </div>
                            <Tabs.Root
                                className="flex flex-col  w-full "
                                defaultValue="tab1"
                            >

                                <Tabs.List className='flex px-8 bg-[#f9fafb] rounded-t-xl'>
                                    {tabData.map((tab, index) => (
                                        <Tabs.Trigger
                                            key={index}
                                            className="w-fit-content px-5 h-[45px] inline-block items-center  justify-center text-[15px] leading-none select-none data-[state=active] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative cursor-default"
                                            value={tab.value}
                                            style={{ color: tab.color }}
                                        >
                                            <div className="flex items-center justify-center">
                                                {tab.count && (
                                                    <span
                                                        style={{ backgroundColor: tab.count.colorbg }}
                                                        className="inline-flex items-center px-1 mx-1 rounded-md justify-center bg-white text-[13px] leading-none font-medium h-[20px] text-mauve11"
                                                    >
                                                        {tab.count.number}
                                                    </span>
                                                )}
                                                {tab.label}
                                            </div>
                                        </Tabs.Trigger>

                                    ))}
                                </Tabs.List>

                                <Tabs.Content
                                    className="grow  bg-white rounded-b-xl outline-none "
                                    value="tab1"
                                >
                                    
                                    <UnreadTable />
                                </Tabs.Content>
                                <Tabs.Content
                                    className="grow  bg-white rounded-b-xl outline-none "
                                    value="tab2"
                                >

                                    <ReadTable />
                                </Tabs.Content>
                                <Tabs.Content
                                    className="grow  bg-white rounded-b-xl outline-none "
                                    value="tab3"
                                >
                                    <AllTable />
                                </Tabs.Content>

                            </Tabs.Root >

                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
        </>
    )
}

export default Notification