const formatThreeColor = (color: string): string => {
    color.replace('#', '0x');
    return color;
};

export default formatThreeColor;
