"use client";
export default function Help() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#111418]">
              <div className="size-4">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
                Helping Hands
              </h2>
            </div>
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  //    value=""
                />
              </div>
            </label>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#111418]"
                  data-icon="Bell"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#111418]"
                  data-icon="ChatCircleDots"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-[#111418]"
                  data-icon="Question"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/ebfdd10d-8c69-4a1a-b628-13f91d443dc0.png")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Requests and Offers
              </p>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dbe0e6] px-4 justify-between">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4 flex-1"
                  href="#"
                >
                  <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
                    Needs
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#60758a] pb-[13px] pt-4 flex-1"
                  href="#"
                >
                  <p className="text-[#60758a] text-sm font-bold leading-normal tracking-[0.015em]">
                    Offers
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{
                    backgroundImage:
                      ' url("https://cdn.usegalileo.ai/sdxl10/3f700ea4-d276-4a13-99a1-d7407ed24e85.png")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    Help moving a couch
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">
                    I need help moving a couch from my garage to my living room.
                    It's heavy, and I can't do it alone.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Offer Help</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/d73c1d95-4fe0-4c3b-a237-f585b14b705b.png")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    Bike repair help needed
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">
                    I'm looking for someone to help me fix my bike. It's not in
                    great shape, and I don't have the tools to do it myself.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Offer Help</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/313e672f-28e7-45a5-be23-06a49b9481f6.png")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    Free homegrown produce
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">
                    I have some extra produce from my garden and would like to
                    share it with someone in need. Pickup only.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Offer Help</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/aa93b1ee-358f-41e9-b7bd-56ec5e602a64.png")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                    Free tutoring services
                  </p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">
                    I'm offering free tutoring for high school math and science
                    classNamees. In person or online, let me know what you need.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Offer Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Careers
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Press
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Help
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Policies
                </a>
                <a
                  className="text-[#60758a] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Unsubscribe
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div
                    className="text-[#60758a]"
                    data-icon="FacebookLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#60758a]"
                    data-icon="TwitterLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#60758a]"
                    data-icon="InstagramLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#60758a]"
                    data-icon="LinkedinLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#60758a] text-base font-normal leading-normal">
                2023 Helping Hands
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
