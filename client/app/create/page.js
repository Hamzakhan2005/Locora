"use client";
export default function CreateListing() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
          <div className="flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">
              LocalHelp
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
              >
                Home
              </a>
              <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
              >
                Explore
              </a>
              <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
              >
                List
              </a>
              <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
              >
                Map
              </a>
              <a
                className="text-[#111418] text-sm font-medium leading-normal"
                href="#"
              >
                Calendar
              </a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#258df4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Post</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/51e0d76a-7710-424b-bcef-1f7deb63a2db.png")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Create a listing
              </p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">
                  Title
                </p>
                <input
                  placeholder="E.g. free baby clothes"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                  //    value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">
                  Description
                </p>
                <textarea
                  placeholder="E.g. I have a bunch of baby clothes that my son has outgrown, so I want to give them away to someone who needs them."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none min-h-36 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              What kind of listing is this?
            </h3>
            <div className="flex flex-col gap-3 p-4">
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe0e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
                  name="99d35564-115a-4a7d-831b-b5662fe86a2a"
                  //    checked=""
                />
                <div className="flex grow flex-col">
                  <p className="text-[#111418] text-sm font-medium leading-normal">
                    Offer
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe0e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
                  name="99d35564-115a-4a7d-831b-b5662fe86a2a"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#111418] text-sm font-medium leading-normal">
                    Request
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-4 rounded-xl border border-solid border-[#dbe0e6] p-[15px]">
                <input
                  type="radio"
                  className="h-5 w-5 border-2 border-[#dbe0e6] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
                  name="99d35564-115a-4a7d-831b-b5662fe86a2a"
                />
                <div className="flex grow flex-col">
                  <p className="text-[#111418] text-sm font-medium leading-normal">
                    Announcement
                  </p>
                </div>
              </label>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Category
            </h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  Baby &amp; Kids
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  Clothes &amp; Accessories
                </p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f5] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  Toys &amp; Games
                </p>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Add photos
            </h3>
            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/280e21d2-8dd0-462d-a5a3-59420efbc534.png")',
                  }}
                ></div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#258df4] text-white text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Post</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
