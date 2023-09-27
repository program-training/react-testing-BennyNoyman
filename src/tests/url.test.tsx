import { render, screen } from "@testing-library/react"
import {describe, expect, test} from "vitest";

import {Url} from "../components/URL/URL.tsx";
import {userEvent} from "@testing-library/user-event";


describe("url component,", () => {
    test("input field exist", () => {
        render(<Url/>);
        const inputElement = screen.getByPlaceholderText("insert url here");
        expect(inputElement).toBeInTheDocument();
    });
    test("rendering qr on click", async() => {
        render(<Url/>);
        const user = userEvent.setup();
        const buttonElement = screen.getByRole("button");
        const inputElement = screen.getByRole("textbox")
        await user.type(inputElement, "some url")
        await user.click(buttonElement);
        const qr = screen.getByRole("img");
        expect(qr).toBeInTheDocument();
    });
})