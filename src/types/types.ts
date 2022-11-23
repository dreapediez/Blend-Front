export interface UiState {
  isLoading: boolean;
  modal: ModalState;
}

export interface ModalState {
  modalText: string;
  isError: boolean;
  showModal: boolean;
}

export interface ShowModalActionPayload {
  isError: boolean;
  modalText: string;
}
