const { Select, Divider } = antd;

        const tzAndPlaces = {
        "Etc/GMT+12": "International Date Line West",
        "Pacific/Midway": "Midway Island, Samoa",
        "Pacific/Honolulu": "Hawaii",
        "America/Juneau": "Alaska",
        "America/Dawson": "Pacific Time (US and Canada), Tijuana",
        "America/Boise": "Mountain Time (US and Canada)",
        "America/Chihuahua": "Chihuahua, La Paz, Mazatlan",
        "America/Phoenix": "Arizona",
        "America/Chicago": "Central Time (US and Canada)",
        "America/Regina": "Saskatchewan",
        "America/Mexico_City": "Guadalajara, Mexico City, Monterrey",
        "America/Belize": "Central America",
        "America/Detroit": "Eastern Time (US and Canada)",
        "America/Indiana/Indianapolis": "Indiana (East)",
        "America/Bogota": "Bogota, Lima, Quito",
        "America/Glace_Bay": "Atlantic Time (Canada)",
        "America/Caracas": "Caracas, La Paz",
        "America/Santiago": "Santiago",
        "America/St_Johns": "Newfoundland and Labrador",
        "America/Sao_Paulo": "Brasilia",
        "America/Argentina/Buenos_Aires": "Buenos Aires, Georgetown",
        "America/Godthab": "Greenland",
        "Etc/GMT+2": "Mid-Atlantic",
        "Atlantic/Azores": "Azores",
        "Atlantic/Cape_Verde": "Cape Verde Islands",
        GMT: "Dublin, Edinburgh, Lisbon, London",
        "Africa/Casablanca": "Casablanca, Monrovia",
        "Atlantic/Canary": "Canary Islands",
        "Europe/Belgrade": "Belgrade, Budapest, Ljubljana, Prague",
        "Europe/Sarajevo": "Sarajevo, Skopje, Warsaw, Zagreb",
        "Europe/Brussels": "Brussels, Copenhagen, Madrid, Paris",
        "Europe/Amsterdam": "Amsterdam, Berlin, Bern, Rome, Stockholm",
        "Africa/Algiers": "West Central Africa",
        "Europe/Bucharest": "Bucharest",
        "Africa/Cairo": "Cairo",
        "Europe/Helsinki": "Helsinki, Kiev, Riga, Sofia, Tallinn",
        "Europe/Athens": "Athens, Istanbul, Minsk",
        "Asia/Jerusalem": "Jerusalem",
        "Africa/Harare": "Harare, Pretoria",
        "Europe/Moscow": "Moscow, St. Petersburg, Volgograd",
        "Asia/Kuwait": "Kuwait, Riyadh",
        "Africa/Nairobi": "Nairobi",
        "Asia/Baghdad": "Baghdad",
        "Asia/Tehran": "Tehran",
        "Asia/Dubai": "Abu Dhabi, Muscat",
        "Asia/Baku": "Baku, Tbilisi, Yerevan",
        "Asia/Kabul": "Kabul",
        "Asia/Yekaterinburg": "Ekaterinburg",
        "Asia/Karachi": "Islamabad, Karachi, Tashkent",
        "Asia/Kolkata": "Chennai, Kolkata, Mumbai, New Delhi",
        "Asia/Kathmandu": "Kathmandu",
        "Asia/Dhaka": "Astana, Dhaka",
        "Asia/Colombo": "Sri Jayawardenepura",
        "Asia/Almaty": "Almaty, Novosibirsk",
        "Asia/Rangoon": "Yangon Rangoon",
        "Asia/Bangkok": "Bangkok, Hanoi, Jakarta",
        "Asia/Krasnoyarsk": "Krasnoyarsk",
        "Asia/Shanghai": "Beijing, Chongqing, Hong Kong SAR",
        "Asia/Kuala_Lumpur": "Kuala Lumpur, Singapore",
        "Asia/Taipei": "Taipei",
        "Australia/Perth": "Perth",
        "Asia/Irkutsk": "Irkutsk, Ulaanbaatar",
        "Asia/Seoul": "Seoul",
        "Asia/Tokyo": "Osaka, Sapporo, Tokyo",
        "Asia/Yakutsk": "Yakutsk",
        "Australia/Darwin": "Darwin",
        "Australia/Adelaide": "Adelaide",
        "Australia/Sydney": "Canberra, Melbourne, Sydney",
        "Australia/Brisbane": "Brisbane",
        "Australia/Hobart": "Hobart",
        "Asia/Vladivostok": "Vladivostok",
        "Pacific/Guam": "Guam, Port Moresby",
        "Asia/Magadan": "Magadan, Solomon Islands, New Caledonia",
        "Pacific/Fiji": "Fiji Islands, Kamchatka, Marshall Islands",
        "Pacific/Auckland": "Auckland, Wellington",
        "Pacific/Tongatapu": "Nuku'alofa"
        };

        const buildTZ = (id) => {
        const momentTz = moment.tz(id);
        const offset = momentTz.utcOffset();
        const places = tzAndPlaces[id] ? tzAndPlaces[id] : "";
        const name = `${id}${places && " - " + places}`;
        const gmt = `GMT${offset ? momentTz.format("Z") : ""}`;
        const fullName = `${gmt} - ${name}`;
        return { id, fullName, gmt };
        };

        const timezones = moment.tz
        .names()
        .filter((tz) => tzAndPlaces[tz])
        .reduce((acum, id) => [...acum, buildTZ(id)], [])
        .sort((a, b) => a.offset - b.offset)
        .concat({
            id: null,
            fullName: `Let my browser decide - Currently ${
            buildTZ(moment.tz.guess()).gmt
            }`
        });

        function onChange(value) {
        console.log(`selected ${value}`);
        }

        ReactDOM.render(
        <Select
            showSearch
            style={{ width: 500 }}
            placeholder="Select a timezone"
            optionFilterProp="fullName"
            onChange={onChange}
            defaultValue={null}
            filterOption={(input, option) =>
            option.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {timezones.map((tz) => (
            <Select.Option key={tz.id} value={tz.id}>
                {" "}
                {tz.fullName}
            </Select.Option>
            ))}
        </Select>,
        mountNode
        );

        // Based of https://matall.in/posts/building-an-usable-timezone-selector/