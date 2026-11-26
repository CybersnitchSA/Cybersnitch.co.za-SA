import { site } from "@/config/site";

const values = [
  {
    k: "CYBERSNITCH'S MISSION",
    v: "1) Tracking & Locating lost Smartphones, Wearables and Computers and reuniting them with their rightful owner. 2)Ensuring the contents & files on missing devices are secured & protected, provided the contents on the device have not yet been wiped or accessed. 3)Using Ethical Hackig to target and triangulate the whereabouts of the missing device through Signal Strength (RSSI), Cell Tower Triangulation, Wi-Fi Positioning Systems (WPS) & BSSIDs.",
  },
  {
    k: "OUR APPROACH",
    v: "The line between WhiteHat, GreyHat and BlackHat hacking is Consent & Intent. This means with your cosent as the rightful owner of the device as GreyHat Cybersecurity Snitches our approach combines cybersecurity intrusive malware and RAT exploits that target the lost device's geolocation telemetry, GSM & backdoor network vulnerabilities such as GTPDOOR, SS7 Protocol Exploitation, Diameter Protocol Exploitation, Broadcast Paging Attacks, Baseband Unit Compromises & Core Roaming GPRS Tunneling. As the saying goes, good men must understand evil so that evil men do not become fluent in it. This saying also applies with BlackHat techniques.",
  },
  {
    k: "PRIVACY",
    v: "Access to the device being tracked is only active during the tracking process. This means no further debugging or monitoring will be done anymore once your device is located. Privacy and confidentiality remain our greatest cosiderations particularly when it comes to handling your device info, contents and activities hence no traces of the maliciously modified firmwware/malware remains on your traced device. Read our Privacy Statement for More Info.",
  },
  {
    k: "STANDARD",
    v: "Kali Linux is the gold standard of Cybersecurity, Penetration Testing, Ethical Hacking and GPS Exploitation and our hacking/infiltration skills and computing expertise are particularly suited for any ethical hacking endeavor. This includes targeting or intercepting a device. From the device's MAC & IP Address, Location Status, Contents/Activities, Firmware Reset Info, App Login Info, Network Traffic, Registry Markers & Access Points all that information is harvestable and salvageable through Kali Linux Penetration Tools and even after the device has been reset or the Firmware changed it's possible to still have remote exploitation and control over it and this is the crux of locating and tracking devices through Advanced Computing, Ethical Hacking, HunxByts, VSL700, Julian NC, PB2204, and the Deep Web.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <div className="reveal lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.2em] text-signal">02 / ABOUT</div>
            <h2 className="mt-5 max-w-[20ch] font-display text-3xl font-medium leading-tight tracking-tight text-fg text-balance lg:text-4xl">
              Need to Locate Your Lost or Missing Device?.
            </h2>
            <div className="mt-6 h-px w-full hair-x" aria-hidden="true" />
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-mut text-pretty">
              Be it a Tablet, Wearable or a Smartphone - if you still have the IMEI number or the box of the phone
               (or conversely if it's a computer) with so many Kali Linux & Parrot OS Penetration tools, Hacking Exploits, RATs, Spywares,
               Man-in-The-Middle Attacks, BlackHat & Dark-Web resources that you can take advantage of, simply giving up on your lost device
              should not be an option as there are more practical ways of debugging, eavesdropping & deploying surveillance as a means of locating, tracking,
              monitoring and tampering with a device remotely. Best part is GreyHat hacking resources do not depend on Data/Location being On and the device 
              being Connected to the internet to establish contact. Hence when it comes to BlackHat methods, {site.name} is the ultimate snitching plug when it comes to
              tracing lost devices in South Africa and abroad.
            </p>
          </div>
          <div className="reveal lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.k} className="bg-ink p-6 transition-colors hover:bg-panel">
                  <div className="font-mono text-[10px] tracking-[0.15em] text-dim">{v.k}</div>
                  <p className="mt-3 text-sm leading-relaxed text-fg">{v.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
