// @flow strict

export type CommandType = {|
    name: string, 
    url: string, 
    searchurl?: string,
|};

export type CommandNames = 'meta' | 'kanban' | 'intake' | 'wut' | 'cw' | 'sheets' | 'new.sheet' | 'docs' | 
							'new.doc' | 'gm' | 'pm' | 'cal' | 's' | 'stack' | 'a' | 'drive' | 'yt' | 'r' | 'l' | 'g' |
							'wp' | 'wsj' | 'cnn' | 'n' | 'h' | 'pv' | 'hs' | 'wiki' |  'DEFAULT';

export type CommandDataTableType = {|
    name: string, 
    url: string, 
    command: CommandNames
|};

export type ColumnDataTableType = {| 
    data: string, 
    title: string 
|};
'meta' | 'kanban' | 'intake' | 'wut' | 'cw' | 'sheets' | 'new.sheet' | 'docs' | 
							'new.doc' | | 'pm' | 'cal' | 's' | 'stack' | 'a' 
export const COMMANDS: {[CommandNames] : CommandType} = {
    meta: {
        name: "Metabase",
        url: "https://metabaseapp.coverwhale.com",
        searchurl: "https://coverwhale.metabaseapp.com/search?q="
    },
	kanban: {
        name: "Data Kanban",
        url: "https://www.notion.so/coverwhale/Data-bf7c41d164c046a5a6bf444cc921cca2"
    },
	intake: {
        name: "Data Intake",
        url: "https://www.notion.so/coverwhale/856a6abc27a741aba32c8d0f22166240?v=517d70f7be0b4573a8c2eb4e642227c6"
    },
	wut: {
        name: "Glossary",
        url: "https://www.notion.so/coverwhale/Glossary-Acronym-Guide-d8ba7b79deb84df1ae8284be7595148e"
    },
	cw: {
        name: "CoverWhale",
        url: "https://app.coverwhale.com/transportation",
        searchurl: "https://app.coverwhale.com/transportation?state=&status=&transaction_type=&bind_approved=&audit_item=&years_of_business=&number_of_trucks=&agency="
    },
	sheets: {
        name: "Google Sheets",
        url: "http://sheets.google.com/",
        searchurl: "https://docs.google.com/spreadsheets/u/0/?tgif=d&q="
    },
	new.sheet: {
        name: "New Google Sheet",
        url: "https://sheets.new"
    },
	docs: {
        name: "Google Docs",
        url: "https://docs.google.com/document/u/0/?tgif=d",
        searchurl: "https://docs.google.com/document/u/0/?tgif=d&q="
    },
	new.doc: {
        name: "New Google Doc",
        url: "https://docs.new"
    },
	pm: {
        name: "Personal Gmail",
        url: "https://mail.google.com/mail/u/1/#inbox",
        searchurl: "https://mail.google.com/mail/u/1/#search/"
    },
	cal: {
        name: "Calendar",
        url: "https://calendar.google.com/",
        searchurl: "https://calendar.google.com/calendar/u/0/r/search?q="
    },
	s: {
        name: "Slack",
        url: "https://coverwhale.slack.com/archives/CS2T64J65",
        searchurl: "https://coverwhale.slack.com/app_redirect?channel="
    },
	stack: {
        name: "StackOverflow",
        url: "https://stackoverflow.com/",
        searchurl: "https://www.google.com/search?q=site%3Astackoverflow.com+"
    },
	a: {
        name: "Amazon",
        url: "https://www.amazon.com",
        searchurl: "https://www.amazon.com/s?k="
    },
	gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    drive: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    r: {
        name: "Reddit",
        url: "https://reddit.com/",
        searchurl: "https://www.google.com/search?q=site%3Areddit.com+"
    },
    l: {
        name: "Linkedin",
        urq	l: "https://linkedin.com/",
    },
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    wp: {
        name: "Washington Post",
        url: "https://www.washingtonpost.com/regional/"
    },
    wsj: {
        name: "Wall Street Journal",
        url: "https://www.wsj.com/"
    },
    cnn: {
        name: "CNN",
        url: "https://www.cnn.com/"
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q="
    },
    h: {
        name: "Hulu",
        url: "https://hulu.com/",
    },
    pv: {
        name: "Amazon Prime Video",
        url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
        searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="
    },
    hs: {
        name: "Hubspot",
        url: "https://app.hubspot.com/"
    },
    wiki: {
        name: "Wikipedia",
        url: "https://en.wikipedia.org",
        searchurl: "https://en.wikipedia.org/wiki/"
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
};
