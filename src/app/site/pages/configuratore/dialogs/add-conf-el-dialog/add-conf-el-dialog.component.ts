import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { LAYOUTS, createLayout } from '../../layouts/layout.util';
import { BUTTONS, HEADINGS, PARAGRAPHS, WIDGETS, WidgetType, createButton, createHeading, createParagraph } from '../../widgets/widget.util';
import { API_COMMANDS, CARD_READER_COMMANDS, CASH_COMMANDS, CommandType, EPP_COMMANDS, JOURNAL_COMMANDS, KEYBOARD_COMMANDS, LOGGER_COMMANDS, RPC_COMMANDS, SESSIONS_COMMANDS, TERMINAL_COMMANDS, createAPICommand, createCardReaderCommand, createCashCommand, createEPPCommand, createJournalCommand, createKeyboardCommand, createLoggerCommand, createRPCCommand, createSessionCommand, createTerminalCommand } from '../../commands/command.util';

@Component({
  selector: 'app-add-conf-el-dialog',
  templateUrl: './add-conf-el-dialog.component.html',
  styleUrls: ['./add-conf-el-dialog.component.css']
})
export class AddConfElDialogComponent {

  @Input("target") target!: ConfEl[];
  @Input("supportedConfigs") supportedConfigs!: ConfElType[];

  ConfElType = ConfElType;

  LAYOUTS = LAYOUTS;

  BUTTONS = BUTTONS;
  HEADINGS = HEADINGS;
  PARAGRAPHS = PARAGRAPHS;

  CARD_READER_COMMANDS = CARD_READER_COMMANDS;
  EPP_COMMANDS = EPP_COMMANDS;
  SESSIONS_COMMANDS = SESSIONS_COMMANDS;
  JOURNAL_COMMANDS = JOURNAL_COMMANDS;
  KEYBOARD_COMMANDS = KEYBOARD_COMMANDS;
  LOGGER_COMMANDS = LOGGER_COMMANDS;
  RPC_COMMANDS = RPC_COMMANDS;
  TERMINAL_COMMANDS = TERMINAL_COMMANDS;
  CASH_COMMANDS = CASH_COMMANDS;
  API_COMMANDS = API_COMMANDS;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  select(confEl: ConfEl) {

    let elToAdd;

    if (confEl.type === ConfElType.Layout) {
      elToAdd = createLayout({ numOfCols: confEl.settings.numOfCols });
    }

    if (confEl.type === ConfElType.Widget) {

      if (confEl.name === WidgetType.Button) {
        elToAdd = createButton({ text: confEl.settings.text, size: confEl.settings.size });
      }

      if (confEl.name === WidgetType.Heading) {
        elToAdd = createHeading({ text: confEl.settings.text, size: confEl.settings.size });
      }

      if (confEl.name === WidgetType.Paragraph) {
        elToAdd = createParagraph({ text: confEl.settings.text });
      }
    }

    if (confEl.type === ConfElType.Command) {

      if (confEl.name === CommandType.API) {
        elToAdd = createAPICommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.CardReader) {
        elToAdd = createCardReaderCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Cash) {
        elToAdd = createCashCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.EPP) {
        elToAdd = createEPPCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Journal) {
        elToAdd = createJournalCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Keyboard) {
        elToAdd = createKeyboardCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Logger) {
        elToAdd = createLoggerCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.RPC) {
        elToAdd = createRPCCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Session) {
        elToAdd = createSessionCommand({ ...confEl.settings });
      }

      if (confEl.name === CommandType.Terminal) {
        elToAdd = createTerminalCommand({ ...confEl.settings });
      }
    }

    if (elToAdd) {
      this.target.push(elToAdd);
    }
    
    this.activeModal.close(confEl);
  }
}
