import {
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  ClientEvents,
  ContextMenuCommandBuilder,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js';
import { Manager } from '../shulker';

export interface CommandOptions {
  premium?: boolean;
  cooldown?: number;
  owner?: boolean;
  autocomplete?: (client: Manager, interaction: AutocompleteInteraction) => void;
}

export class Command {
  readonly structure:
    | SlashCommandBuilder
    | ContextMenuCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
  readonly run: (client: Manager, interaction: ChatInputCommandInteraction, paypal: Manager['paypal']) => void;
  readonly options: CommandOptions | undefined;
  name: any;
  cooldown!: number;

  constructor(
    structure:
      | SlashCommandBuilder
      | ContextMenuCommandBuilder
      | SlashCommandSubcommandsOnlyBuilder
      | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>,
    run: (client: Manager, interaction: ChatInputCommandInteraction) => void,
    options?: CommandOptions
  ) {
    this.structure = structure;
    this.run = run;
    this.options = options;
  }
}

export class Event<K extends keyof ClientEvents> {
  readonly event: K;
  readonly run: (...args: ClientEvents[K]) => void;
  readonly once?: boolean;

  constructor(event: K, run: (...args: ClientEvents[K]) => void, once?: boolean) {
    this.event = event;
    this.run = run;
    this.once = once;
  }
}
