import {reducer} from "./reducer";

type StateType = {
    collapsed: boolean
}
test("state should be opposite", () => {

    const state: StateType = {
        collapsed: false
    }


    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(true)
})

test("state should be false", () => {

    const state: StateType = {
        collapsed: true
    }


    const newState = reducer(state, {type: "TOGGLE-COLLAPSED"})

    expect(newState.collapsed).toBe(false)
})

test("state should be some result", () => {

    const state: StateType = {
        collapsed: true
    }


    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})
