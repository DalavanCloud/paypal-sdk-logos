/* @flow */
/** @jsx node */

import { node, html } from 'jsx-pragmatic/src';
import { noop } from 'belter/src';

import { PPLogo, PayPalLogo, LOGO_COLOR } from '../../../src';
import { validateSVG, getNonce } from '../common';

describe('paypal logo rendering happy cases', () => {

    it('should render the pp logo in white', () => {
        const logo = (
            <PPLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the pp logo in blue', () => {
        const logo = (
            <PPLogo logoColor={ LOGO_COLOR.BLUE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the pp logo in black', () => {
        const logo = (
            <PPLogo logoColor={ LOGO_COLOR.BLACK } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in white', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.WHITE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in blue', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.BLUE } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });

    it('should render the paypal logo in black', () => {
        const logo = (
            <PayPalLogo logoColor={ LOGO_COLOR.BLACK } nonce={ getNonce() } />
        );

        const logoHTML = logo.render(html());

        validateSVG(logoHTML);
    });
});

describe('paypal logo rendering error cases', () => {

    it('should error while rendering the pp logo with an invalid color', () => {

        let error;

        try {
            noop(<PPLogo logoColor="turquoise" nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });

    it('should error while rendering the paypal logo with an invalid color', () => {

        let error;

        try {
            noop(<PayPalLogo logoColor="turquoise" nonce={ getNonce() } />);
        } catch (err) {
            error = err;
        }
        
        if (!error) {
            throw new Error(`Expected error to be thrown`);
        }
    });
});
