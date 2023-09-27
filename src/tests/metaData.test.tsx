import {MetaData} from "../components/MetaData/MetaData.tsx";
import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";

describe("meta data component", () => {
    test("view details", () => {
        render(<MetaData data={{url: 'https://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[pixels]x[pixels]',
            width: 100,
            height: 100,
            date: Date().toLocaleString()}}/>)
        const date = screen.getByTestId("date");
        expect(date).toBeInTheDocument();
    })
})