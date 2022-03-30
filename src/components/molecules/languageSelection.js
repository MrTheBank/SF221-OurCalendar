import React from 'react';
import {Actionsheet, Box, ChevronRightIcon, Flex, HStack, Pressable, Text} from 'native-base';

const LANGUAGES = {
    english: 'English',
    thai: 'ไทย',
    japanese: '日本語'
};

class LanguageSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionsheet: false,
        };
    }

    onPress(language) {
        this.props.language = LANGUAGES[language];
        this.setState({actionsheet: false});
    }

    background(language) {
        return this.props.language === LANGUAGES[language] ? '#0d9488' : '#ffffff';
    }

    render() {
        return (
            <>
            <Box width="100%">
                <Pressable onPress={() => this.setState({actionsheet: true})}>
                    <HStack paddingTop="3%">
                        <Text width="60%" fontSize="19" fontWeight="bold"paddingLeft="14%"> Language</Text>
                        <Flex width="30%" direction="row" justify="flex-end">
                            <Text fontSize="19">{this.props.language}</Text>
                            <ChevronRightIcon size="8"/>
                        </Flex>
                    </HStack>
                </Pressable>
                <Actionsheet isOpen={this.state.actionsheet} onClose={() => this.setState({actionsheet: false})}>
                    <Actionsheet.Content>
                        {Object.keys(LANGUAGES).map((key, i) => {
                            return (
                                <Actionsheet.Item onPress={() => this.onPress(key)} key={i} backgroundColor={this.background(key)}>{LANGUAGES[key]}</Actionsheet.Item>
                            );
                        })}
                    </Actionsheet.Content>
                </Actionsheet>
            </Box>
            </>
        );
    }
}
export default LanguageSelection;
