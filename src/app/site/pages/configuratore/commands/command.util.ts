import { guid } from "src/app/utils/uuid";
import { ConfEl, ConfElType } from "../services/configuratore.service";
import { CommandWrapComponent } from "./command-wrap/command-wrap.component";

export enum CommandType {
    Session = "Comando sessione",
    Journal = "Comando journal",
    Logger = "Comando logger",
    RPC = "Comando RPC",
    Cash = "Comando cash",
    API = "Comando API"
}

export const COMMANDS = [
    createSessionCommand({ name: "First menu ready", catalogueId: "internal:firstMenuReady" }),
    createSessionCommand({ name: "End user session", catalogueId: "internal:endUserSession" }),
    createSessionCommand({ name: "Override session timeout", catalogueId: "internal:overrideSessTimeout" }),
    createSessionCommand({ name: "Override user timeout", catalogueId: "internal:overrideUserTimeout" }),
    createJournalCommand({ name: "Read journal", catalogueId: "internal:readJournal" }),
    createJournalCommand({ name: "Write journal", catalogueId: "internal:writeJournal" }),
    createLoggerCommand({ name: "Read log", catalogueId: "internal:readLog" }),
    createLoggerCommand({ name: "Write log", catalogueId: "internal:writeLog" }),
    createRPCCommand({ name: "Print receipt", catalogueId: "internal:printReceipt" }),
    createCashCommand({ name: "Cash deposit", catalogueId: "internal:cashDeposit" }),
    createCashCommand({ name: "Cash withdraw", catalogueId: "internal:cashWithdraw" }),
    createAPICommand({ name: "Log business TAS", catalogueId: "external:logBusinessTAS" }),
    createAPICommand({ name: "BSM Service API", catalogueId: "external:BSMServiceAPI" }),
];

export const SESSIONS_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Session);
export const JOURNAL_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Journal);
export const LOGGER_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Logger);
export const RPC_COMMANDS = COMMANDS.filter(c => c.name === CommandType.RPC);
export const CASH_COMMANDS = COMMANDS.filter(c => c.name === CommandType.Cash);
export const API_COMMANDS = COMMANDS.filter(c => c.name === CommandType.API);

export function createSessionCommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Session,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createJournalCommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Journal,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createLoggerCommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Logger,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createRPCCommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.RPC,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createCashCommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.Cash,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createAPICommand(opt: { name: string, catalogueId: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Command,
        name: CommandType.API,
        component: CommandWrapComponent,
        // settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            ...opt
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}
