import {Qr} from "../components/QR/QR.tsx";
import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";

const url = 'https://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]';

describe("qr component", () => {
    test("qr code", () => {
        render(<Qr url={url}/>);
        const image =screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });
    test("rendering meta data", async() => {
        render(<Qr url={url}/>);
        const button = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(button);
        const date = screen.getByTestId("date");
        expect(date).toBeInTheDocument();
    })
})