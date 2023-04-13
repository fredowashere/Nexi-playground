import { guid } from "src/app/utils/uuid";
import { ConfEl, ConfElType } from "../services/configuratore.service";
import { CommandWrapComponent } from "./command-wrap/command-wrap.component";
import { CommandSettingsDialogComponent } from "./command-settings-dialog/command-settings-dialog.component";

export enum CommandType {
    CardReader = "Comando carta",
    EPP = "Comando EPP",
    Session = "Comando sessione",
    Journal = "Comando journal",
    Keyboard = "Comando tastiera",
    Logger = "Comando logger",
    RPC = "Comando RPC",
    Terminal = "Comando Terminal",
    Cash = "Comando cash",
    API = "Comando API"
}

export const COMMANDS = [

    createCardReaderCommand({ name: "Chip status" }),
    createCardReaderCommand({ name: "Close session" }),
    createCardReaderCommand({ name: "Get application list" }),
    createCardReaderCommand({ name: "Get card track 2" }),
    createCardReaderCommand({ name: "Get card track 3" }),
    createCardReaderCommand({ name: "Get card track 3n" }),
    createCardReaderCommand({ name: "Get tag data" }),
    createCardReaderCommand({ name: "Has chip" }),
    createCardReaderCommand({ name: "Issue response" }),
    createCardReaderCommand({ name: "Select application" }),
    createCardReaderCommand({ name: "Selected application" }),
    createCardReaderCommand({ name: "Set transaction type" }),
    createCardReaderCommand({ name: "Start new transaction" }),

    createEPPCommand({ name: "Accept pin" }),
    createEPPCommand({ name: "Get secure data" }),
    createEPPCommand({ name: "Verify pin" }),

    createJournalCommand({ name: "Add line" }),
    createJournalCommand({ name: "Do print" }),

    createKeyboardCommand({ name: "Card retain" }),
    createKeyboardCommand({ name: "Get status" }),
    createKeyboardCommand({ name: "Get reset timeout for ATM" }),
    createKeyboardCommand({ name: "Set status" }),
    createKeyboardCommand({ name: "Set timeout" }),

    createLoggerCommand({ name: "Log" }),

    createRPCCommand({ name: "Add base64 image" }),
    createRPCCommand({ name: "Add image" }),
    createRPCCommand({ name: "Add receipt line" }),
    createRPCCommand({ name: "Flush" }),
    createRPCCommand({ name: "Print receipt" }),
    createRPCCommand({ name: "Print receipt grafic" }),

    createSessionCommand({ name: "Dispense device" }),
    createSessionCommand({ name: "Fallback to local menu" }),
    createSessionCommand({ name: "First menu ready" }),
    createSessionCommand({ name: "Get app list" }),
    createSessionCommand({ name: "Get value" }),
    createSessionCommand({ name: "Log" }),
    createSessionCommand({ name: "Set anomaly" }),
    createSessionCommand({ name: "Set app" }),
    createSessionCommand({ name: "Set application" }),
    createSessionCommand({ name: "Set language" }),
    createSessionCommand({ name: "Set timeout default" }),
    createSessionCommand({ name: "Set timeout run" }),
    createSessionCommand({ name: "Set value" }),
    createSessionCommand({ name: "Set timeout navigate" }),
    createSessionCommand({ name: "User timeout" }),
    createSessionCommand({ name: "Override session timeout" }),
    createSessionCommand({ name: "Override user timeout" }),

    createTerminalCommand({ name: "Get device list" }),
    createTerminalCommand({ name: "Get language" }),
    createTerminalCommand({ name: "Get terminal ABI" }),
    createTerminalCommand({ name: "Get terminal attribute" }),
    createTerminalCommand({ name: "Get terminal ID" }),
    createTerminalCommand({ name: "Get web interface version" }),
    createTerminalCommand({ name: "Get web software version" }),

    createCashCommand({ name: "Cash deposit" }),
    createCashCommand({ name: "Cash withdraw" }),

    createAPICommand({ name: "Log business TAS" }),
    createAPICommand({ name: "BSM Service API" }),
];

export const CARD_READER_COMMANDS = COMMANDS.filter(c => c.name === CommandType.CardReader);
export const EPP_COMMANDS = COMMANDS.filter(c => c.name === CommandType.EPP);
export const SESSIONS_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Session);
export const JOURNAL_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Journal);
export const KEYBOARD_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Keyboard);
export const LOGGER_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Logger);
export const RPC_COMMANDS = COMMANDS.filter(c => c.name === CommandType.RPC);
export const TERMINAL_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Terminal);
export const CASH_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Cash);
export const API_COMMANDS = COMMANDS.filter(c => c.name === CommandType.API);

export function createCardReaderCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.CardReader,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createEPPCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.EPP,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createSessionCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Session,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createJournalCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Journal,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createKeyboardCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Keyboard,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createLoggerCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Logger,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createRPCCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.RPC,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createTerminalCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Terminal,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createCashCommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Cash,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createAPICommand(opt: { name: string, input?: string, goto?: string, exeMode?: "sync" | "async" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.API,
        component: CommandWrapComponent,
        settingsDialog: CommandSettingsDialogComponent,
        settings: {
            name: opt.name,
            input: opt.input || "",
            goto: opt.goto || "",
            exeMode: opt.exeMode || ""
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}
