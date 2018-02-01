import styled from 'styled-components'
import {media} from 'styles/utils'

export const StyledHeader = styled.header`
	background: ${props => props.theme.primaryColor};
	border-bottom: 1px solid ${props => props.theme.primaryColorDark};
	box-shadow: inset 0 0 0 0 ${props => props.theme.primaryColorDark},
		0 2px 1px 0 ${props => props.theme.primaryColorDark};
	color: ${props => props.theme.primaryColorText};
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	z-index: 444;
	height: 72px;

	.header-inner {
		display: flex;
		padding: 0 15px;
	}

	.page-title {
		line-height: 1;
		font-size: 24px;
		align-items: center;
		display: flex;
	}

	.navicon {
		width: 48px;
		height: 48px;
		padding: 12px;
		line-height: 1;
		font-size: 24px;
		display: none;
		${media.md`
			display: block;
		`};
	}
`
