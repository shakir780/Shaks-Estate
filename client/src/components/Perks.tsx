interface PerksProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    wifi: string;
    parking: string;
    ac: string;
    tv: string;
    radio: string;
    pets: string;
    furnished: string;
  };
}
export default function Perks({ handleChange, formData }: PerksProps) {
  return (
    <>
      <div className=" mt-2 grid gap-2 grid-cols-2 ">
        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            value={formData.wifi}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
            />
          </svg>

          <span>Wifi</span>
        </label>

        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="park"
            id="parking"
            value={formData.parking}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>

          <span> parking spot</span>
        </label>
        <label className=" items-center border p-4 flex rounded-2xl gap-2  cursor-pointer">
          <input
            type="checkbox"
            name="Tv"
            id="tv"
            value={formData.tv}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          <span>Tv</span>
        </label>
        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="radio"
            id="radio"
            value={formData.radio}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>

          <span>Radio</span>
        </label>
        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="pets"
            id="pets"
            value={formData.pets}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>

          <span>Pets</span>
        </label>
        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="furnished"
            id="furnished"
            value={formData.furnished}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
            />
          </svg>

          <span>Furnished</span>
        </label>
        <label className=" items-center border p-4 flex rounded-2xl gap-2">
          <input
            type="checkbox"
            name="ac"
            id="ac"
            value={formData.ac}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            className="w-6 h-6"
            viewBox="0 0 122.88 67.41"
          >
            <g>
              <path d="M79.93,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C81.22,56.36,82.7,54,79.93,51.37L79.93,51.37z M14.57,28.11h73.65c0.96,0,1.74,0.78,1.74,1.74v12.26h24.13 c1.46,0,2.79-0.6,3.75-1.56c0.96-0.96,1.56-2.29,1.56-3.75V8.8c0-1.46-0.6-2.79-1.56-3.75c-0.96-0.96-2.29-1.56-3.75-1.56H8.8 c-1.46,0-2.79,0.6-3.75,1.56C4.08,6.01,3.48,7.34,3.48,8.8V36.8c0,1.46,0.6,2.79,1.56,3.75c0.96,0.96,2.29,1.56,3.75,1.56h4.03 V29.85C12.83,28.89,13.61,28.11,14.57,28.11L14.57,28.11z M86.48,31.59H16.31v10.09h70.17V31.59L86.48,31.59z M15.21,13.64 c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21 L15.21,13.64z M98.58,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46s-2.46-1.1-2.46-2.46S97.23,31.99,98.58,31.99 L98.58,31.99z M108.85,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46c-1.36,0-2.46-1.1-2.46-2.46S107.49,31.99,108.85,31.99 L108.85,31.99z M8.8,0h105.29c2.42,0,4.62,0.99,6.21,2.58c1.59,1.59,2.58,3.79,2.58,6.21V36.8c0,2.42-0.99,4.62-2.58,6.21 c-1.59,1.59-3.79,2.58-6.21,2.58H8.8c-2.42,0-4.62-0.99-6.21-2.58C0.99,41.42,0,39.22,0,36.8V8.8c0-2.42,0.99-4.62,2.58-6.21 C4.18,0.99,6.38,0,8.8,0L8.8,0z M15.21,21.76c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74 c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21L15.21,21.76z M21.37,51.37c-0.53-0.51-0.32-1.2,0.48-1.54 c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55 c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C22.66,56.36,24.13,54,21.37,51.37L21.37,51.37z M36.01,51.37 c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19 c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C37.3,56.36,38.77,54,36.01,51.37 L36.01,51.37z M50.65,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C51.94,56.36,53.42,54,50.65,51.37L50.65,51.37z M65.29,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3 c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24 c-3.47-3.03-1.85-5.62-0.17-8.32C66.58,56.36,68.06,54,65.29,51.37L65.29,51.37z" />
            </g>
          </svg>

          <span>Air Condition</span>
        </label>
      </div>
    </>
  );
}
