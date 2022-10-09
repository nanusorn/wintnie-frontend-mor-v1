import {PageMeta} from "../../components/Layout/Page";
import styled from "styled-components";
import PageSection from "../../components/PageSection";
import {CHECK_PRIZES_BG, FINISHED_ROUNDS_BG, GET_TICKETS_BG} from "../Lottery/pageSectionStyles";
import {Flex, Heading} from "@pancakeswap/uikit";
import BidAdminCard from "./components/BidAdminCard";

const WinTnieAdminPage = styled.div`
  min-height: calc(100vh - 64px);
`

const WinTnieAdmin = () => {
    return (
        <>
            <PageMeta />
            <WinTnieAdminPage>

                <PageSection
                    containerProps={{ style: { marginTop: '-30px' } }}
                    background={GET_TICKETS_BG}
                    concaveDivider
                    clipFill={{ light: '#7645D9' }}
                    dividerPosition="top"
                    index={2}
                >
                    <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
                        <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
                            {'Floor Bidding'}
                        </Heading>
                        <BidAdminCard />
                    </Flex>
                </PageSection>

                <PageSection
                    containerProps={{ style: { marginTop: '-30px' } }}
                    background={FINISHED_ROUNDS_BG}
                    concaveDivider
                    clipFill={{ light: '#9A9FD0' }}
                    dividerPosition="top"
                    index={2}
                >
                    <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
                        <Heading scale="xl" color="#000000" mb="24px" textAlign="center">
                            {'O.M.G'}
                        </Heading>
                    </Flex>
                </PageSection>

                <PageSection
                    containerProps={{ style: { marginTop: '-30px' } }}
                    background={CHECK_PRIZES_BG}
                    concaveDivider
                    clipFill={{ light: '#3D2A54' }}
                    dividerPosition="top"
                    index={2}
                >
                    <Flex alignItems="center" justifyContent="center" flexDirection="column" pt="24px">
                        <Heading scale="xl" color="#ffffff" mb="24px" textAlign="center">
                            {'Prediction'}
                        </Heading>
                    </Flex>
                </PageSection>

            </WinTnieAdminPage>
        </>
    )
}

export default WinTnieAdmin;