/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type GameStruct = {
  gameType: BigNumberish;
  gameId: BigNumberish;
  duration: BigNumberish;
  price: BigNumberish;
  startedAt: BigNumberish;
  prize: BigNumberish;
  status: BigNumberish;
};

export type GameStructOutput = [
  number,
  number,
  number,
  BigNumber,
  BigNumber,
  BigNumber,
  number
] & {
  gameType: number;
  gameId: number;
  duration: number;
  price: BigNumber;
  startedAt: BigNumber;
  prize: BigNumber;
  status: number;
};

export interface FloorBiddingInterface extends utils.Interface {
  functions: {
    "bet(uint8,uint32)": FunctionFragment;
    "endGame(uint8)": FunctionFragment;
    "getGame(uint8)": FunctionFragment;
    "owner()": FunctionFragment;
    "startGame(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bet",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endGame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startGame",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "bet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startGame", data: BytesLike): Result;

  events: {
    "AcknowledgeBet(uint8,uint16,address)": EventFragment;
    "AnnounceBet(uint8,uint16,address,uint32)": EventFragment;
    "AnnounceParticipant(uint8,uint16,address)": EventFragment;
    "AnnounceWinner(uint8,uint16,address)": EventFragment;
    "AnnounceWinnerChange(uint8,uint16,address)": EventFragment;
    "GameEnd(uint8,uint16)": EventFragment;
    "GameStart(uint8,uint16)": EventFragment;
    "NewGame(uint8,uint16)": EventFragment;
    "Received(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AcknowledgeBet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AnnounceBet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AnnounceParticipant"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AnnounceWinner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AnnounceWinnerChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameEnd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStart"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewGame"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
}

export type AcknowledgeBetEvent = TypedEvent<
  [number, number, string],
  { gameType: number; gameId: number; bettor: string }
>;

export type AcknowledgeBetEventFilter = TypedEventFilter<AcknowledgeBetEvent>;

export type AnnounceBetEvent = TypedEvent<
  [number, number, string, number],
  { gameType: number; gameId: number; bettor: string; number: number }
>;

export type AnnounceBetEventFilter = TypedEventFilter<AnnounceBetEvent>;

export type AnnounceParticipantEvent = TypedEvent<
  [number, number, string],
  { gameType: number; gameId: number; bettor: string }
>;

export type AnnounceParticipantEventFilter =
  TypedEventFilter<AnnounceParticipantEvent>;

export type AnnounceWinnerEvent = TypedEvent<
  [number, number, string],
  { gameType: number; gameId: number; winner: string }
>;

export type AnnounceWinnerEventFilter = TypedEventFilter<AnnounceWinnerEvent>;

export type AnnounceWinnerChangeEvent = TypedEvent<
  [number, number, string],
  { gameType: number; gameId: number; bettor: string }
>;

export type AnnounceWinnerChangeEventFilter =
  TypedEventFilter<AnnounceWinnerChangeEvent>;

export type GameEndEvent = TypedEvent<
  [number, number],
  { gameType: number; gameId: number }
>;

export type GameEndEventFilter = TypedEventFilter<GameEndEvent>;

export type GameStartEvent = TypedEvent<
  [number, number],
  { gameType: number; gameId: number }
>;

export type GameStartEventFilter = TypedEventFilter<GameStartEvent>;

export type NewGameEvent = TypedEvent<
  [number, number],
  { gameType: number; gameId: number }
>;

export type NewGameEventFilter = TypedEventFilter<NewGameEvent>;

export type ReceivedEvent = TypedEvent<
  [string, BigNumber],
  { sender: string; amount: BigNumber }
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface FloorBidding extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FloorBiddingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bet(
      gameType: BigNumberish,
      number: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGame(
      gameType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[GameStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    startGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bet(
    gameType: BigNumberish,
    number: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endGame(
    gameType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGame(
    gameType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<GameStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  startGame(
    gameType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bet(
      gameType: BigNumberish,
      number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endGame(gameType: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getGame(
      gameType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<GameStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    startGame(gameType: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AcknowledgeBet(uint8,uint16,address)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AcknowledgeBetEventFilter;
    AcknowledgeBet(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AcknowledgeBetEventFilter;

    "AnnounceBet(uint8,uint16,address,uint32)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null,
      number?: null
    ): AnnounceBetEventFilter;
    AnnounceBet(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null,
      number?: null
    ): AnnounceBetEventFilter;

    "AnnounceParticipant(uint8,uint16,address)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AnnounceParticipantEventFilter;
    AnnounceParticipant(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AnnounceParticipantEventFilter;

    "AnnounceWinner(uint8,uint16,address)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      winner?: string | null
    ): AnnounceWinnerEventFilter;
    AnnounceWinner(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      winner?: string | null
    ): AnnounceWinnerEventFilter;

    "AnnounceWinnerChange(uint8,uint16,address)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AnnounceWinnerChangeEventFilter;
    AnnounceWinnerChange(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null,
      bettor?: string | null
    ): AnnounceWinnerChangeEventFilter;

    "GameEnd(uint8,uint16)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): GameEndEventFilter;
    GameEnd(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): GameEndEventFilter;

    "GameStart(uint8,uint16)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): GameStartEventFilter;
    GameStart(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): GameStartEventFilter;

    "NewGame(uint8,uint16)"(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): NewGameEventFilter;
    NewGame(
      gameType?: BigNumberish | null,
      gameId?: BigNumberish | null
    ): NewGameEventFilter;

    "Received(address,uint256)"(
      sender?: string | null,
      amount?: BigNumberish | null
    ): ReceivedEventFilter;
    Received(
      sender?: string | null,
      amount?: BigNumberish | null
    ): ReceivedEventFilter;
  };

  estimateGas: {
    bet(
      gameType: BigNumberish,
      number: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGame(
      gameType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    startGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bet(
      gameType: BigNumberish,
      number: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGame(
      gameType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startGame(
      gameType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
