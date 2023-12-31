import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { MdGTranslate } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { language } from '@/config/constants';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';

export default function Header() {
	const [menu, setMenu] = useState(false);
	const { toggleColorMode, colorMode } = useColorMode();
	const { t, i18n } = useTranslation();

	const onLanguage = lng => {
		i18n.changeLanguage(lng);
	};

	return (
		<Flex
			w={'full'}
			px={{ base: 2, lg: 16 }}
			h={24}
			align={'center'}
			bg={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={'space-between'}
			borderBottom={'1px'}
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			shadow={'base'}
			position={'fixed'}
			top={0}
			left={0}
			zIndex={99}
		>
			<Link href={'/'}>
				{colorMode === 'light' ? (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/dark_logo.png'} alt='logo' />
				) : (
					<Image w={40} src={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'} alt='logo' />
				)}
			</Link>
			{!menu ? (
				<IconButton
					display={{ sm: 'block', md: 'none' }}
					position={'absolute'}
					right={2}
					aria-label='color-mode'
					fontSize={'3xl'}
					icon={<BiMenuAltRight />}
					colorScheme={'facebook'}
					variant={'ghost'}
					cursor={'pointer'}
					onClick={() => setMenu(prev => !prev)}
				/>
			) : (
				<IconButton
					display={{ sm: 'block', md: 'none' }}
					position={'absolute'}
					right={2}
					aria-label='color-mode'
					fontSize={'3xl'}
					icon={<MdClose />}
					colorScheme={'facebook'}
					variant={'ghost'}
					cursor={'pointer'}
					onClick={() => setMenu(prev => !prev)}
				/>
			)}
			{menu ? (
				<Flex
					zIndex={9}
					w={'full'}
					h={'50vh'}
					flexDirection={'column'}
					gap={8}
					py={6}
					position={'absolute'}
					top={24}
					right={0}
					bg={useColorModeValue('gray.100', 'gray.800')}
				>
					<Flex flexDirection={'column'} textAlign={'center'}>
						<Button variant={'outline'} py={7}>
							<Link className={useColorModeValue('gray-900', 'gray-100')} href={'/'}>
								{/* {t('home', { ns: 'layout' })} */}
								Bosh sahifa
							</Link>
						</Button>
						<Button variant={'outline'} py={7}>
							<Link className={useColorModeValue('gray-900', 'gray-100')} href={'/about'}>
								{/* {t('about', { ns: 'layout' })} */}
								Biz haqimizda
							</Link>
						</Button>
						<Button variant={'outline'} py={7}>
							<Link className={useColorModeValue('gray-900', 'gray-100')} href={'/course'}>
								{/* {t('course', { ns: 'layout' })} */}
								Kurslar
							</Link>
						</Button>
						<Button variant={'outline'} py={7}>
							<Link className={useColorModeValue('gray-900', 'gray-100')} href={'/contact'}>
								{/* {t('contact', { ns: 'layout' })} */}
								Biz bilan bog'lanish
							</Link>
						</Button>
					</Flex>
					<HStack ml={4}>
						{/* <Menu>
							<MenuButton
								aria-label='translate'
								as={IconButton}
								icon={<MdGTranslate />}
								colorScheme={'facebook'}
								variant={'outline'}
							/>
							<MenuList>
								{language.map(item => (
									<MenuItem
										key={item.lng}
										onClick={() => onLanguage(item.lng)}
										backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
									>
										<Flex gap={4}>
											<Image w={8} src={item.img} alt='A descriptive text for the image' /> {item.nativeLang}
										</Flex>
									</MenuItem>
								))}
							</MenuList>
						</Menu> */}

						<IconButton
							aria-label='color-mode'
							onClick={toggleColorMode}
							icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
							colorScheme={'facebook'}
							variant={'outline'}
						/>
						{/* <Link href={'/signin'}>
							<Button rightIcon={<FaUserGraduate />} colorScheme='facebook' variant={'outline'}>
								{t('login', { ns: 'layout' })}
							</Button>
						</Link> */}
					</HStack>
				</Flex>
			) : (
				''
			)}
			<HStack gap={8} display={{ sm: 'none', md: 'flex' }}>
				<Flex display={{ base: 'none', md: 'flex' }} gap={7}>
					<Link className={useColorModeValue('gray.7800', 'gray.100')} href={'/'}>
						{/* {t('home', { ns: 'layout' })} */}
						Bosh sahifa
					</Link>
					<Link className={useColorModeValue('gray.7800', 'gray.100')} href={'/about'}>
						{/* {t('about', { ns: 'layout' })} */}
						Biz haqimizda
					</Link>
					<Link className={useColorModeValue('gray.7800', 'gray.100')} href={'/course'}>
						{/* {t('course', { ns: 'layout' })} */}
						Kurslar
					</Link>
					<Link className={useColorModeValue('gray.7800', 'gray.100')} href={'/contact'}>
						{/* {t('contact', { ns: 'layout' })} */}
						Biz bilan bog'lanish
					</Link>
				</Flex>
				<HStack display={{ base: 'none', md: 'flex' }}>
					{/* <Menu>
						<MenuButton
							aria-label='translate'
							as={IconButton}
							icon={<MdGTranslate />}
							colorScheme={'facebook'}
							variant={'outline'}
						/>
						<MenuList>
							{language.map(item => (
								<MenuItem
									key={item.lng}
									onClick={() => onLanguage(item.lng)}
									backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
								>
									<Flex gap={4}>
										<Image w={8} src={item.img} alt='A descriptive text for the image' /> {item.nativeLang}
									</Flex>
								</MenuItem>
							))}
						</MenuList>
					</Menu> */}

					<IconButton
						aria-label='color-mode'
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
						colorScheme={'facebook'}
						variant={'outline'}
					/>
					{/* <Link href={'/signin'}>
						<Button rightIcon={<FaUserGraduate />} colorScheme='facebook' variant={'outline'}>
							{t('login', { ns: 'layout' })}
						</Button>
					</Link> */}
				</HStack>
			</HStack>
		</Flex>
	);
}
