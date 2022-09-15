
const initialState = {
}
export default function app(state = initialState, { type, payload }: { type: string, payload: any }) {
  switch (type) {
    default:
      return {
        ...state
      }
  }
}