import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

export function ContactForm() {
  const [phone, setPhone] = useState<string | undefined>();

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/70">Full Name *</label>
          <input
            className="mt-2 h-[48px] w-full rounded-full bg-[#e9e5e3] px-5 text-[#6f4a3a] outline-none border border-[#a16a54]"
            placeholder="e.g giorgi giorgidze"
          />
        </div>

        <div>
          <label className="text-sm text-white/70">Email address *</label>
          <input
            className="mt-2 h-[48px] w-full rounded-full bg-[#e9e5e3] px-5 text-[#6f4a3a] outline-none border border-[#a16a54]"
            placeholder="e.g g.giorgidze@gmail.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-white/70">Phone number *</label>

        <div className="mt-2 h-[48px] flex items-center rounded-full border border-[#a16a54] bg-[#e9e5e3] px-5">
          <PhoneInput
            international
            defaultCountry="GE"
            value={phone}
            onChange={setPhone}
            placeholder="e.g +995 555 123 456"
            className="flex items-center gap-3 w-full h-full"
            inputClassName="bg-transparent outline-none text-[#6f4a3a] w-full"
            countrySelectProps={{
              className:
                "bg-transparent outline-none text-[#6f4a3a] cursor-pointer",
            }}
          />
        </div>
      </div>


      <div>
        <label className="text-sm text-white/70">Text message</label>
        <textarea
          className="mt-2 w-full min-h-[160px] rounded-3xl bg-[#e9e5e3] px-5 py-4 text-[#6f4a3a] outline-none border border-[#a16a54] resize-none"
          placeholder="Text message"
        />
      </div>

      <button
        type="submit"
        className="px-12 py-3 rounded-full bg-[#7a4e3a] text-white hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
}
