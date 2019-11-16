--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0 (Debian 12.0-2.pgdg100+1)
-- Dumped by pg_dump version 12.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS spbseeker;
--
-- Name: spbseeker; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE spbseeker WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';


ALTER DATABASE spbseeker OWNER TO postgres;

\connect spbseeker

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id bigint NOT NULL,
    admin_id bigint NOT NULL,
    img_url character varying(255),
    name character varying(255),
    created_date timestamp without time zone,
    updated_date timestamp without time zone
);


ALTER TABLE public.category OWNER TO postgres;

--
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hibernate_sequence OWNER TO postgres;

--
-- Name: hint; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hint (
    id bigint NOT NULL,
    description character varying(255),
    hint_action character varying(255),
    img_url character varying(255),
    name character varying(255),
    short_description character varying(255)
);


ALTER TABLE public.hint OWNER TO postgres;

--
-- Name: point; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.point (
    id bigint NOT NULL,
    admin_id bigint NOT NULL,
    created_date timestamp without time zone,
    description character varying(255),
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    name character varying(255),
    order_num bigint NOT NULL,
    short_description character varying(255),
    updated_date timestamp without time zone,
    travel_id bigint,
    type character varying(255)
);


ALTER TABLE public.point OWNER TO postgres;

--
-- Name: point_img_url_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.point_img_url_list (
    point_id bigint NOT NULL,
    img_url_list character varying(255)
);


ALTER TABLE public.point_img_url_list OWNER TO postgres;

--
-- Name: route; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.route (
    id bigint NOT NULL,
    admin_id bigint NOT NULL,
    category_name character varying(255),
    description_url character varying(255),
    img_url character varying(255),
    name character varying(255),
    created_date timestamp without time zone,
    updated_date timestamp without time zone,
    category_id bigint,
    description character varying(255)
);


ALTER TABLE public.route OWNER TO postgres;

--
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category VALUES (2, 0, 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', 'Flamingo Travel', '2019-10-12 18:36:00.847', '2019-10-12 18:36:33.262');
INSERT INTO public.category VALUES (495, 1, '', 'Travel', '2019-10-13 10:05:48.551', '2019-10-13 10:05:48.551');
INSERT INTO public.category VALUES (500, 1, '', 'Travel 2', '2019-10-13 10:07:33.986', '2019-10-13 10:07:33.986');


--
-- Data for Name: hint; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.hint VALUES (6, 'string', 'COMPASS', 'https://images.homedepot-static.com/productImages/fd255e2a-fe91-4b84-8b34-63c41f639df4/svn/beige-designer-stencils-stencils-fs040-64_1000.jpg', 'compass', 'string');


--
-- Data for Name: point; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.point VALUES (11, 0, '2019-10-12 23:13:04.544', 'Выставки современного искусства в;историческом центре Санкт‑Петербурга', 59.934066, 30.3032064, 'Центральный выставочный зал «Манеж»', 0, '', '2019-10-12 23:13:04.544', NULL, 'museum');
INSERT INTO public.point VALUES (69, 0, '2019-10-12 23:13:15.403', 'уникальная коллекция русских художников, собранная И.Бродским, включая его собственные работы;', 59.937512, 30.329246, 'Музей-квартира Исаака Бродского', 0, '', '2019-10-12 23:13:15.403', NULL, 'museum');
INSERT INTO public.point VALUES (71, 0, '2019-10-12 23:13:15.737', 'Первый национальный общелитературный музей,;крупнейшее хранилище автографов писателей', 59.944815, 30.301259, 'Пушкинский дом, институт русской литературы', 0, '', '2019-10-12 23:13:15.737', NULL, 'museum');
INSERT INTO public.point VALUES (507, 1, '2019-10-13 12:38:51.969', '123', 123, 123, 'qwe', 123, '123', '2019-10-13 12:38:51.969', NULL, NULL);
INSERT INTO public.point VALUES (511, 1, '2019-10-13 12:44:03.989', '123', 123, 123, 'qwe', 123, 'qwe123', '2019-10-13 12:44:03.989', NULL, NULL);
INSERT INTO public.point VALUES (9, 0, '2019-10-12 23:12:27.165', 'первое здание в Санкт-Петербурге; было построено для императора Петра I', 59.953308, 30.330888, 'Домик Петра I', 0, '', '2019-10-12 23:12:27.165', NULL, 'museum');
INSERT INTO public.point VALUES (10, 0, '2019-10-12 23:13:04.302', 'величественный символ города, один из лучших кафедральных соборов Европы', 59.933905, 30.306485, 'Исаакиевский собор', 0, '', '2019-10-12 23:13:04.302', NULL, 'museum');
INSERT INTO public.point VALUES (83, 0, '2019-10-13 08:19:59.326', 'Бар-кальянная с химической тематикой и демократичными ценами', 59.930002, 30.319407, 'Лаборатория 31', 0, '', '2019-10-13 08:19:59.326', NULL, 'restaurant');
INSERT INTO public.point VALUES (84, 0, '2019-10-13 08:19:59.75', 'Бар-кальянная с химической тематикой на улице Марата', 59.9258, 30.351486, 'Лаборатория 31', 0, '', '2019-10-13 08:19:59.75', NULL, 'restaurant');
INSERT INTO public.point VALUES (85, 0, '2019-10-13 08:19:59.95', '', 59.96501923, 30.31572914, 'Паруса на крыше', 0, '', '2019-10-13 08:19:59.95', NULL, 'restaurant');
INSERT INTO public.point VALUES (86, 0, '2019-10-13 08:20:00.292', 'Ресторан с регулярными pre-party на ул. Восстания', 59.94303008, 30.36014707, 'Par', 0, '', '2019-10-13 08:20:00.292', NULL, 'restaurant');
INSERT INTO public.point VALUES (87, 0, '2019-10-13 08:20:00.506', 'Polatavskaya 7 &mdash; ресторан с атмосферой лаунжа в центре Петербурга в т', 59.926774, 30.368626, 'Poltavskaya 7', 0, '', '2019-10-13 08:20:00.506', NULL, 'restaurant');
INSERT INTO public.point VALUES (88, 0, '2019-10-13 08:20:00.72', '', 59.93145377, 30.31314046, 'Unity Sennaya', 0, '', '2019-10-13 08:20:00.72', NULL, 'restaurant');
INSERT INTO public.point VALUES (89, 0, '2019-10-13 08:20:00.968', 'Семейный ресторан у Дудергофского канала', 59.85397077, 30.15532472, 'Duderhoff', 0, '', '2019-10-13 08:20:00.968', NULL, 'restaurant');
INSERT INTO public.point VALUES (90, 0, '2019-10-13 08:20:01.15', 'Рестобар в креативном кластере &laquo;Голицын лофт&raquo;', 59.940668, 30.341174, 'Квартира', 0, '', '2019-10-13 08:20:01.15', NULL, 'restaurant');
INSERT INTO public.point VALUES (91, 0, '2019-10-13 08:20:01.315', 'Банкетный ресторан с дизайнерским праздничным оформлением на ', 59.92179871, 30.30890083, 'Le Glamour', 0, '', '2019-10-13 08:20:01.315', NULL, 'restaurant');
INSERT INTO public.point VALUES (92, 0, '2019-10-13 08:20:01.551', 'Банкетный ресторан с элементами лофта и шебби-шика на Садовой', 59.919459, 30.292799, 'Mon Amour', 0, '', '2019-10-13 08:20:01.551', NULL, 'restaurant');
INSERT INTO public.point VALUES (93, 0, '2019-10-13 08:20:01.755', 'Ресторан с караоке на проспекте Медиков', 59.96884, 30.315284, 'Unity Petrogradka', 0, '', '2019-10-13 08:20:01.755', NULL, 'restaurant');
INSERT INTO public.point VALUES (94, 0, '2019-10-13 08:20:02.044', 'Видовой ресторан на территории Центрального яхт-клуба Петербу', 59.96590042, 30.23889923, 'Паруса', 0, '', '2019-10-13 08:20:02.044', NULL, 'restaurant');
INSERT INTO public.point VALUES (95, 0, '2019-10-13 08:20:02.709', 'Самый высокий панорамный ресторан Петербурга &mdash; 150 метров над з', 59.850527, 30.304693, 'Этаж 41', 0, '', '2019-10-13 08:20:02.709', NULL, 'restaurant');
INSERT INTO public.point VALUES (96, 0, '2019-10-13 08:20:03.057', 'Шоу-ресторан в спальном районе на юге города', 59.85111, 30.218563, 'Circus', 0, '', '2019-10-13 08:20:03.057', NULL, 'restaurant');
INSERT INTO public.point VALUES (97, 0, '2019-10-13 08:20:03.236', 'Небольшой  ресторан традиционной грузинской кухни на Московск', 59.91009903, 30.31800079, 'Чито-Гврито', 0, '', '2019-10-13 08:20:03.236', NULL, 'restaurant');
INSERT INTO public.point VALUES (98, 0, '2019-10-13 08:20:03.442', 'Бар с химической тематикой в Банковском переулке', 59.930219, 30.32504, 'Mendeleev', 0, '', '2019-10-13 08:20:03.442', NULL, 'restaurant');
INSERT INTO public.point VALUES (99, 0, '2019-10-13 08:20:03.645', 'Видовой ресторан на крыше отеля &laquo;Санкт-Петербург&raquo;', 59.95704066, 30.34126854, 'La Vue', 0, '', '2019-10-13 08:20:03.645', NULL, 'restaurant');
INSERT INTO public.point VALUES (100, 0, '2019-10-13 08:20:03.881', '', 59.9294014, 30.31559944, 'Аллегро', 0, '', '2019-10-13 08:20:03.881', NULL, 'restaurant');
INSERT INTO public.point VALUES (101, 0, '2019-10-13 08:20:04.095', 'Бар-кальянная на Пяти углах', 59.926566, 30.342916, 'Lounge Room', 0, '', '2019-10-13 08:20:04.095', NULL, 'restaurant');
INSERT INTO public.point VALUES (102, 0, '2019-10-13 08:20:04.3', 'Ресторан ближневосточной кухни в Пушкине', 59.724859, 30.40623, 'MZE', 0, '', '2019-10-13 08:20:04.3', NULL, 'restaurant');
INSERT INTO public.point VALUES (103, 0, '2019-10-13 08:20:04.449', 'Панорамный ресторан-пивоварня в ТРК &laquo;Питерлэнд&raquo;', 59.98189926, 30.20999908, 'Папаша Клаусс', 0, '', '2019-10-13 08:20:04.449', NULL, 'restaurant');
INSERT INTO public.point VALUES (104, 0, '2019-10-13 08:20:04.6', 'Бар и караоке-клуб на седьмом этаже БЦ &laquo;Ковенский 5&raquo;', 59.93740082, 30.3567009, '7sky', 0, '', '2019-10-13 08:20:04.6', NULL, 'restaurant');
INSERT INTO public.point VALUES (105, 0, '2019-10-13 08:20:04.785', 'Ресторанно-банкетный комплекс на Лесном проспекте', 59.98157709, 30.34234368, 'Сказка Востока 1001 ночь', 0, '', '2019-10-13 08:20:04.785', NULL, 'restaurant');
INSERT INTO public.point VALUES (106, 0, '2019-10-13 08:20:05.163', 'Тайм-кальянная на Малой Посадской улице', 59.957642, 30.32124751, 'Cherish', 0, '', '2019-10-13 08:20:05.163', NULL, 'restaurant');
INSERT INTO public.point VALUES (107, 0, '2019-10-13 08:20:05.404', 'Банкетный комплекс у парка &laquo;Куракина Дача&raquo;', 59.8707752, 30.44839325, 'Невские звезды', 0, '', '2019-10-13 08:20:05.404', NULL, 'restaurant');
INSERT INTO public.point VALUES (108, 0, '2019-10-13 08:20:05.602', 'Банкетный ресторан на третьем этаже ТЦ &laquo;Афонский&raquo;', 60.026145, 30.303489, 'Бамбина', 0, '', '2019-10-13 08:20:05.602', NULL, 'restaurant');
INSERT INTO public.point VALUES (109, 0, '2019-10-13 08:20:05.805', 'Двухэтажный ресторан на Большом проспекте П.С.', 59.960503, 30.302968, 'Must', 0, '', '2019-10-13 08:20:05.805', NULL, 'restaurant');
INSERT INTO public.point VALUES (110, 0, '2019-10-13 08:20:06.003', 'Ресторан с обширной пивной коллекцией на Невском проспекте', 59.932522, 30.347273, 'Chateau Vintage', 0, '', '2019-10-13 08:20:06.003', NULL, 'restaurant');
INSERT INTO public.point VALUES (111, 0, '2019-10-13 08:20:06.152', 'Дизайнерский ресторан при отеле Gamma на наб. Обводного канала', 59.908534, 30.29209, 'NOK', 0, '', '2019-10-13 08:20:06.152', NULL, 'restaurant');
INSERT INTO public.point VALUES (112, 0, '2019-10-13 08:20:06.343', '', 59.934321, 30.371132, 'Русское солнце', 0, '', '2019-10-13 08:20:06.343', NULL, 'restaurant');
INSERT INTO public.point VALUES (113, 0, '2019-10-13 08:20:06.563', 'Клубный бар эконом-класса', 59.92020035, 30.33830071, 'Доски', 0, '', '2019-10-13 08:20:06.563', NULL, 'restaurant');
INSERT INTO public.point VALUES (114, 0, '2019-10-13 08:20:06.874', 'Демократичный семейный ресторан на Кондратьевском проспекте', 59.979952, 30.393959, 'Кум Кума', 0, '', '2019-10-13 08:20:06.874', NULL, 'restaurant');
INSERT INTO public.point VALUES (115, 0, '2019-10-13 08:20:07.034', 'Классический банкетный зал недалеко от Таврического сада', 59.937864, 30.378346, 'Provence', 0, '', '2019-10-13 08:20:07.034', NULL, 'restaurant');
INSERT INTO public.point VALUES (116, 0, '2019-10-13 08:20:07.205', 'Уютный бар для закрытых мероприятий, открытый командой Union и &laquo;Ф', 59.928406, 30.337014, 'Сезоны', 0, '', '2019-10-13 08:20:07.205', NULL, 'restaurant');
INSERT INTO public.point VALUES (117, 0, '2019-10-13 08:20:07.436', 'Ресторан русской кухни на набережной Невы', 59.934461, 30.277762, 'Usoff', 0, '', '2019-10-13 08:20:07.436', NULL, 'restaurant');
INSERT INTO public.point VALUES (118, 0, '2019-10-13 08:20:07.579', 'Кальянный клуб в формате тайм-кафе на Измайловском проспекте', 59.918129, 30.30719, 'Why Not?', 0, '', '2019-10-13 08:20:07.579', NULL, 'restaurant');
INSERT INTO public.point VALUES (119, 0, '2019-10-13 08:20:07.743', 'Ресторан французской кухни с интерьером в стиле прованс', 59.92309952, 30.35269928, 'Philibert', 0, '', '2019-10-13 08:20:07.743', NULL, 'restaurant');
INSERT INTO public.point VALUES (120, 0, '2019-10-13 08:20:07.922', 'Бар-кальянная на Садовой улице', 59.935651, 30.335451, 'Lounge Room', 0, '', '2019-10-13 08:20:07.922', NULL, 'restaurant');
INSERT INTO public.point VALUES (121, 0, '2019-10-13 08:20:08.129', 'Панорамный ресторан на крыше отеля &laquo;Введенский&raquo;', 59.9598999, 30.30330086, 'Невесомость', 0, '', '2019-10-13 08:20:08.129', NULL, 'restaurant');
INSERT INTO public.point VALUES (122, 0, '2019-10-13 08:20:08.315', 'Ночной клуб, караоке-бар и концертная площадка в центре города', 59.93255369, 30.31961071, 'Santa Barbara', 0, '', '2019-10-13 08:20:08.315', NULL, 'restaurant');
INSERT INTO public.point VALUES (123, 0, '2019-10-13 08:20:08.569', '', 59.94530106, 30.3647995, 'Vinity', 0, '', '2019-10-13 08:20:08.569', NULL, 'restaurant');
INSERT INTO public.point VALUES (124, 0, '2019-10-13 08:20:08.788', 'Ресторан-бар блогера Николая Соболева в Полтавском проезде', 59.92550787, 30.36736471, 'Hype', 0, '', '2019-10-13 08:20:08.788', NULL, 'restaurant');
INSERT INTO public.point VALUES (125, 0, '2019-10-13 08:20:08.987', 'Семейный сербский ресторан на третьем этаже ТРЦ &laquo;Охта Молл&raquo;', 59.940145, 30.418366, 'Вкусновица', 0, '', '2019-10-13 08:20:08.987', NULL, 'restaurant');
INSERT INTO public.point VALUES (126, 0, '2019-10-13 08:20:09.251', 'Ресторанчик с домашней атмосферой на Светлановском проспекте', 60.04299927, 30.40299988, 'Посиделки', 0, '', '2019-10-13 08:20:09.251', NULL, 'restaurant');
INSERT INTO public.point VALUES (127, 0, '2019-10-13 08:20:09.6', 'Один из самых известных ресторанов Арама Мнацаканова', 59.9776001, 30.31850052, 'Rыба', 0, '', '2019-10-13 08:20:09.6', NULL, 'restaurant');
INSERT INTO public.point VALUES (128, 0, '2019-10-13 08:20:09.792', 'Банкетный ресторан с собственным причалом и видом на Фонтанку', 59.92045975, 30.31501007, 'Баязет', 0, '', '2019-10-13 08:20:09.792', NULL, 'restaurant');
INSERT INTO public.point VALUES (129, 0, '2019-10-13 08:20:10.031', '', 59.943323, 30.361161, 'Dnevnik', 0, '', '2019-10-13 08:20:10.031', NULL, 'restaurant');
INSERT INTO public.point VALUES (130, 0, '2019-10-13 08:20:10.251', 'Двухэтажный семейный ресторан с видом на &laquo;Парк Цветов&raquo;', 60.04109955, 30.39019966, 'Baden Baden', 0, '', '2019-10-13 08:20:10.251', NULL, 'restaurant');
INSERT INTO public.point VALUES (131, 0, '2019-10-13 08:20:10.511', 'Стильный винный бар на улице Академика Павлова', 59.97685, 30.316012, 'Glasses of Wine', 0, '', '2019-10-13 08:20:10.511', NULL, 'restaurant');
INSERT INTO public.point VALUES (132, 0, '2019-10-13 08:20:10.775', '', 59.95434058, 30.37120519, 'Grebeshki', 0, '', '2019-10-13 08:20:10.775', NULL, 'restaurant');
INSERT INTO public.point VALUES (81, 0, '2019-10-12 23:13:17.443', '', 59.944396, 30.34078, 'Музей обороны и блокады Ленинграда', 0, '', '2019-10-12 23:13:17.443', NULL, 'museum');
INSERT INTO public.point VALUES (61, 0, '2019-10-12 23:13:14.167', 'Музей-квартира великого русского композитора', 59.92471, 30.340772, 'Музей Н.А. Римского-Корсакова', 0, '', '2019-10-12 23:13:14.167', NULL, 'museum');
INSERT INTO public.point VALUES (133, 0, '2019-10-13 08:20:10.775', '', 59.98697, 30.178123, 'Лахта-Центр', 0, '', '2019-10-13 08:20:10.775', NULL, 'attraction');
INSERT INTO public.point VALUES (8, 0, '2019-10-12 23:12:26.163', 'старейший архитектурный памятник, с которого началось строительство Санкт-Петербурга', 59.950002, 30.316672, 'Петропавловская крепость', 0, '', '2019-10-12 23:12:26.163', NULL, 'museum');
INSERT INTO public.point VALUES (7, 0, '2019-10-12 23:11:43.283', 'старейший архитектурный памятник, с которого началось строительство Санкт-Петербурга', 59.950002, 30.316672, 'Петропавловская крепость', 0, '', '2019-10-12 23:11:43.283', NULL, 'museum');
INSERT INTO public.point VALUES (12, 0, '2019-10-12 23:13:04.78', 'история русского изобразительного искусства от Х столетия до наших дней', 59.938592, 30.332221, 'Русский музей', 0, '', '2019-10-12 23:13:04.78', NULL, 'museum');
INSERT INTO public.point VALUES (16, 0, '2019-10-12 23:13:05.485', 'памятник императору Александру II освободителю, 7065 кв.м. мозаик', 59.9401, 30.3289, 'Спас на крови', 0, '', '2019-10-12 23:13:05.485', NULL, 'museum');
INSERT INTO public.point VALUES (490, 1, '2019-10-13 08:42:14.564', 'Some description about point', 1, 2, 'Point 1', 1, 'Some point', '2019-10-13 08:42:14.564', NULL, NULL);
INSERT INTO public.point VALUES (34, 0, '2019-10-12 23:13:08.867', 'экспозиция о работе секретных служб в дореволюционный и советский периоды', 59.936545, 30.311051, 'Музей истории политической полиции России', 0, '', '2019-10-12 23:13:08.867', NULL, 'museum');
INSERT INTO public.point VALUES (35, 0, '2019-10-12 23:13:09.127', 'рассказ о жизни и быте петербургских разночинцев в XVIII - начале XX вв.', 59.923403, 30.327408, 'Разночинный Петербург', 0, '', '2019-10-12 23:13:09.127', NULL, 'museum');
INSERT INTO public.point VALUES (36, 0, '2019-10-12 23:13:09.261', 'дворец ближайшего сподвижника Петра I - центр культурной жизни столицы в XVIII в.', 59.939525, 30.295545, 'Дворец Меншикова', 0, '', '2019-10-12 23:13:09.261', NULL, 'museum');
INSERT INTO public.point VALUES (37, 0, '2019-10-12 23:13:09.401', 'бывшая квартира С.М. Кирова, лидера ленинградских большевиков', 59.962307, 30.313799, 'Музей-квартира С.М. Кирова', 0, '', '2019-10-12 23:13:09.401', NULL, 'museum');
INSERT INTO public.point VALUES (38, 0, '2019-10-12 23:13:09.504', 'узнайте больше об истории веера - этого прекрасного и многоликого аксессуара', 59.974975, 30.303923, 'Музей "Искусство веера"', 0, '', '2019-10-12 23:13:09.504', NULL, 'museum');
INSERT INTO public.point VALUES (40, 0, '2019-10-12 23:13:09.935', 'резиденция Павла I, в которой он был убит заговорщиками в 1801 г.', 59.939994, 30.338046, 'Михайловский замок', 0, '', '2019-10-12 23:13:09.935', NULL, 'museum');
INSERT INTO public.point VALUES (59, 0, '2019-10-12 23:13:13.857', 'о развитии политической жизни российского общества с конца XVIII по начало XXI в.;', 59.954645, 30.325345, 'Музей политической истории России', 0, '', '2019-10-12 23:13:13.857', NULL, 'museum');
INSERT INTO public.point VALUES (64, 0, '2019-10-12 23:13:14.616', 'старейшее арктическое судно в России,;совершившее кругосветный боевой поход в годы ВОв', 59.92775939, 30.26895477, 'Ледокол "Красин"', 0, '', '2019-10-12 23:13:14.616', NULL, 'museum');
INSERT INTO public.point VALUES (503, 1, '2019-10-13 12:06:56.985', '123', 123, 123, 'qwe', 123, '123', '2019-10-13 12:06:56.985', NULL, NULL);
INSERT INTO public.point VALUES (60, 0, '2019-10-12 23:13:14.044', 'путешествие в историю коммуникационных технологий', 59.932677, 30.302186, 'Центральный музей связи имени А.С. Попова', 0, '', '2019-10-12 23:13:14.044', NULL, 'museum');
INSERT INTO public.point VALUES (62, 0, '2019-10-12 23:13:14.303', 'квартира и мастерская легендарного русского пейзажиста', 59.945415, 30.293963, 'Музей-квартира Куинджи', 0, '', '2019-10-12 23:13:14.303', NULL, 'museum');
INSERT INTO public.point VALUES (63, 0, '2019-10-12 23:13:14.472', 'экспозиция, отражающая важнейшие события истории российского флота', 59.930297, 30.293094, 'Центральный военно-морской музей', 0, '', '2019-10-12 23:13:14.472', NULL, 'museum');
INSERT INTO public.point VALUES (14, 0, '2019-10-12 23:13:05.104', 'Филиал Государственного Эрмитажа, коллекция изобразительного искусства XIX-XX вв.;', 59.938703, 30.318006, 'Эрмитаж Росси (Восточное крыло Главного Штаба)', 0, '', '2019-10-12 23:13:05.104', NULL, 'museum');
INSERT INTO public.point VALUES (19, 0, '2019-10-12 23:13:05.965', 'великолепные образцы мемориального искусства;', 59.92336, 30.384865, 'Музей городской скульптуры', 0, '', '2019-10-12 23:13:05.965', NULL, 'museum');
INSERT INTO public.point VALUES (20, 0, '2019-10-12 23:13:06.276', 'Основная достопримечательность г.;Кронштадта, храм-памятник всем российским военным морякам', 59.9916028, 29.7775202, 'Кронштадтский Морской собор', 0, '', '2019-10-12 23:13:06.276', NULL, 'museum');
INSERT INTO public.point VALUES (68, 0, '2019-10-12 23:13:15.2', 'один;из первых в стране мемориалов, посвящённых В.И. Ленину', 59.965685, 30.294967, 'Музей-квартира Елизаровых', 0, '', '2019-10-12 23:13:15.2', NULL, 'museum');
INSERT INTO public.point VALUES (504, 1, '2019-10-13 12:08:30.01', '123', 123, 123, 'qwe', 123, '123', '2019-10-13 12:08:30.01', NULL, NULL);
INSERT INTO public.point VALUES (13, 0, '2019-10-12 23:13:04.922', 'знакомство с традиционной культурой более 150 народов России и сопредельных стран', 59.9378311, 30.3343929, 'Российский этнографический музей', 0, '', '2019-10-12 23:13:04.922', NULL, 'museum');
INSERT INTO public.point VALUES (15, 0, '2019-10-12 23:13:05.267', 'необычное собрание, которое содержит выпускные работы многих выдающихся российских мастеров', 59.937773, 30.289893, 'Музей Академии художеств', 0, '', '2019-10-12 23:13:05.267', NULL, 'museum');
INSERT INTO public.point VALUES (17, 0, '2019-10-12 23:13:05.672', 'памятник архитектуры классицизма, дворец с натуральной мраморной облицовкой', 59.945117, 30.326693, 'Мраморный дворец', 0, '', '2019-10-12 23:13:05.672', NULL, 'museum');
INSERT INTO public.point VALUES (18, 0, '2019-10-12 23:13:05.839', 'мемориальная квартира одного из величайших классиков русской и мировой литературы', 59.927309, 30.350792, 'Музей Ф.М. Достоевского', 0, '', '2019-10-12 23:13:05.839', NULL, 'museum');
INSERT INTO public.point VALUES (21, 0, '2019-10-12 23:13:06.583', 'интерактивный макет с кораблями, воссоздающий облик Петербурга во времена Петра I и Екатерины II', 59.9360104, 30.3148608, 'Петровская Акватория', 0, '', '2019-10-12 23:13:06.583', NULL, 'museum');
INSERT INTO public.point VALUES (22, 0, '2019-10-12 23:13:06.697', 'один из самых блистательных загородных ансамблей Европы, знаменитый своей уникальной системой фонтанов', 59.88637253, 29.90859458, 'ГМЗ «Петергоф»', 0, '', '2019-10-12 23:13:06.697', NULL, 'museum');
INSERT INTO public.point VALUES (23, 0, '2019-10-12 23:13:06.852', 'экспозиция старинных музыкальных инструментов в резиденции графов Шереметевых', 59.935562, 30.345935, 'Шереметевский дворец - Музей музыки', 0, '', '2019-10-12 23:13:06.852', NULL, 'museum');
INSERT INTO public.point VALUES (24, 0, '2019-10-12 23:13:06.981', 'роскошный дворцово-парковый ансамбль парадной резиденции Романовых', 59.716942, 30.393051, 'ГМЗ «Царское село»', 0, '', '2019-10-12 23:13:06.981', NULL, 'museum');
INSERT INTO public.point VALUES (25, 0, '2019-10-12 23:13:07.112', 'небольшая усадьба, где прошли первые месяцы семейной жизни А.С. Пушкина', 59.7240407, 30.4000144, 'Музей-дача А.С. Пушкина', 0, '', '2019-10-12 23:13:07.112', NULL, 'museum');
INSERT INTO public.point VALUES (26, 0, '2019-10-12 23:13:07.264', 'великолепный пейзажный парк и дворец императорской четы - Павла I и Марии Федоровны', 59.685624, 30.4526, 'ГМЗ "Павловск"', 0, '', '2019-10-12 23:13:07.264', NULL, 'museum');
INSERT INTO public.point VALUES (27, 0, '2019-10-12 23:13:07.538', 'романтический замок-дворец, окруженный парком с многочисленными озерами', 59.5632, 30.1074, 'ГМЗ "Гатчина"', 0, '', '2019-10-12 23:13:07.538', NULL, 'museum');
INSERT INTO public.point VALUES (28, 0, '2019-10-12 23:13:07.751', 'флигель Фонтанного дома, в котором поэтесса прожила большую часть своей жизни', 59.936295, 30.347618, 'Музей Анны Ахматовой', 0, '', '2019-10-12 23:13:07.751', NULL, 'museum');
INSERT INTO public.point VALUES (29, 0, '2019-10-12 23:13:08.06', 'мемориальный кабинет Михаила Зощенко и литературная экспозиция', 59.937973, 30.32612, 'Литературный музей "ХХ век"', 0, '', '2019-10-12 23:13:08.06', NULL, 'museum');
INSERT INTO public.point VALUES (48, 0, '2019-10-12 23:13:11.283', 'макеты ракет, первого искусственного спутника, космического корабля "Восток" и многое другое', 59.9518197, 30.3215423, 'Музей космонавтики и ракетной техники имени В. П. Глушко', 0, '', '2019-10-12 23:13:11.283', NULL, 'museum');
INSERT INTO public.point VALUES (54, 0, '2019-10-12 23:13:12.363', 'Один из крупнейших артиллерийских фортов Кронштадта с сохранившимися батареями, казармами и дальномерным павильоном.', 59.995277, 29.7011874, 'Форт «Константин»', 0, '', '2019-10-12 23:13:12.363', NULL, 'museum');
INSERT INTO public.point VALUES (66, 0, '2019-10-12 23:13:14.909', 'один из крупнейших храмов Санкт-Петербурга, действующий православный собор', 59.934225, 30.324516, 'Казанский кафедральный собор', 0, '', '2019-10-12 23:13:14.909', NULL, 'museum');
INSERT INTO public.point VALUES (30, 0, '2019-10-12 23:13:08.26', 'Авангард, соцреализм, андеграунд, перестройка и искусство постперестроечного времени', 59.9265053, 30.3000086, 'Музей искусства Санкт-Петербурга ХХ–ХХI веков', 0, '', '2019-10-12 23:13:08.26', NULL, 'museum');
INSERT INTO public.point VALUES (31, 0, '2019-10-12 23:13:08.391', 'дворец в готическом стиле; изначально предназначался Павлом I для приора мальтийского ордена', 59.55827, 30.121448, 'Приоратский замок в Гатчине', 0, '', '2019-10-12 23:13:08.391', NULL, 'museum');
INSERT INTO public.point VALUES (32, 0, '2019-10-12 23:13:08.56', 'уникальная экспозиция об истории русского театра с XVIII по XX столетие', 59.93104, 30.336697, 'Театральный музей', 0, '', '2019-10-12 23:13:08.56', NULL, 'museum');
INSERT INTO public.point VALUES (33, 0, '2019-10-12 23:13:08.695', 'коллекция рукописей, публикаций и письменных свидетельств жизни поэта', 59.940761, 30.32151, 'Литературная экспозиция «А. С. Пушкин. Жизнь и творчество»', 0, '', '2019-10-12 23:13:08.695', NULL, 'museum');
INSERT INTO public.point VALUES (41, 0, '2019-10-12 23:13:10.08', 'памятник героям обороны города в Великой Отечественной войне и прорыву блокады', 59.84327, 30.321943, 'Монумент героическим защитникам Ленинграда', 0, '', '2019-10-12 23:13:10.08', NULL, 'museum');
INSERT INTO public.point VALUES (43, 0, '2019-10-12 23:13:10.425', 'один из лучших образцов архитектуры русского барокко', 59.935705, 30.320118, 'Строгановский дворец', 0, '', '2019-10-12 23:13:10.425', NULL, 'museum');
INSERT INTO public.point VALUES (44, 0, '2019-10-12 23:13:10.578', 'мемориальная квартира одного из самых выдающихся оперных исполнителей на мировой сцене', 59.974199, 30.305638, 'Дом-музей Ф.И.Шаляпина', 0, '', '2019-10-12 23:13:10.578', NULL, 'museum');
INSERT INTO public.point VALUES (45, 0, '2019-10-12 23:13:10.763', 'интерьеры XIX века и экспозиция, посвященная Ленинграду в годы блокады', 59.932754, 30.289414, 'Особняк Румянцева', 0, '', '2019-10-12 23:13:10.763', NULL, 'museum');
INSERT INTO public.point VALUES (46, 0, '2019-10-12 23:13:10.91', 'обширная экспозиция, в которую входит единственное в мире чучело взрослого мамонта', 59.942209, 30.305503, 'Зоологический музей', 0, '', '2019-10-12 23:13:10.91', NULL, 'museum');
INSERT INTO public.point VALUES (47, 0, '2019-10-12 23:13:11.11', 'филиал Государственного Эрмитажа, официальная резиденция Петра I', 59.942823, 30.318047, 'Зимний дворец Петра I', 0, '', '2019-10-12 23:13:11.11', NULL, 'museum');
INSERT INTO public.point VALUES (49, 0, '2019-10-12 23:13:11.708', 'бывший дом М. Матюшина, штаб-квартира петербургских авангардистов в начале XX века', 59.970951, 30.312441, 'Музей петербургского авангарда', 0, '', '2019-10-12 23:13:11.708', NULL, 'museum');
INSERT INTO public.point VALUES (50, 0, '2019-10-12 23:13:11.847', 'единственная в России экспозиция об истории возникновения и развития мировых религий', 59.931539, 30.301679, 'Музей истории религии', 0, '', '2019-10-12 23:13:11.847', NULL, 'museum');
INSERT INTO public.point VALUES (51, 0, '2019-10-12 23:13:12', 'путешествие в древность - уникальный памятник русского оборонного зодчества XIV в.', 59.953894, 31.038778, 'Крепость Орешек', 0, '', '2019-10-12 23:13:12', NULL, 'museum');
INSERT INTO public.point VALUES (52, 0, '2019-10-12 23:13:12.137', 'первый мемориальный музей в России; посвящение великому полководцу-генералиссимусу', 59.94323, 30.376488, 'Мемориальный музей А. Суворова', 0, '', '2019-10-12 23:13:12.137', NULL, 'museum');
INSERT INTO public.point VALUES (53, 0, '2019-10-12 23:13:12.238', 'история типографского дела в бывшем здании редакции революционной газеты "Правда"', 59.938342, 30.320092, 'Музей печати', 0, '', '2019-10-12 23:13:12.238', NULL, 'museum');
INSERT INTO public.point VALUES (55, 0, '2019-10-12 23:13:12.494', 'путешествие в удивительный мир воды и историю русского быта', 59.949036, 30.374794, 'Музей "Вселенная воды"', 0, '', '2019-10-12 23:13:12.494', NULL, 'museum');
INSERT INTO public.point VALUES (56, 0, '2019-10-12 23:13:12.613', 'коллекция императорского, советского и современного фарфора', 59.879812, 30.4468281, 'Музей Императорского фарфорового завода', 0, '', '2019-10-12 23:13:12.613', NULL, 'museum');
INSERT INTO public.point VALUES (57, 0, '2019-10-12 23:13:13.12', 'город-крепость на острове Котлин, база Императорского Балтийского флота', 59.986774, 29.791231, 'Музей истории Кронштадта', 0, '', '2019-10-12 23:13:13.12', NULL, 'museum');
INSERT INTO public.point VALUES (58, 0, '2019-10-12 23:13:13.74', 'музей-квартира, в которой великий русский поэт прожил последние 9 лет своей жизни', 59.923736, 30.28253, 'Музей-квартира А.А. Блока', 0, '', '2019-10-12 23:13:13.74', NULL, 'museum');
INSERT INTO public.point VALUES (65, 0, '2019-10-12 23:13:14.776', 'квартира, в которой В.И. Ленин скрывался от преследования Временного правительства', 59.936143, 30.381414, 'Музей-квартира Аллилуевых', 0, '', '2019-10-12 23:13:14.776', NULL, 'museum');
INSERT INTO public.point VALUES (67, 0, '2019-10-12 23:13:15.015', 'Один из крупнейших музеев железных дорог в Европе', 59.905542, 30.2956483, 'Музей железных дорог России', 0, '', '2019-10-12 23:13:15.015', NULL, 'museum');
INSERT INTO public.point VALUES (70, 0, '2019-10-12 23:13:15.617', 'от архивной фотографии, зарубежной и отечественной, до творчества современных авторов', 59.9332549, 30.3104844, 'РОСФОТО, музейно-выставочный центр', 0, '', '2019-10-12 23:13:15.617', NULL, 'museum');
INSERT INTO public.point VALUES (72, 0, '2019-10-12 23:13:15.963', 'особый взгляд на историю человечества - через историю хлеба', 59.953599, 30.360111, 'Музей Хлеба', 0, '', '2019-10-12 23:13:15.963', NULL, 'museum');
INSERT INTO public.point VALUES (73, 0, '2019-10-12 23:13:16.2', 'коллекция, посвященная тематике полярных исследований', 59.92746, 30.353752, 'Музей Арктики и Антарктики', 0, '', '2019-10-12 23:13:16.2', NULL, 'museum');
INSERT INTO public.point VALUES (74, 0, '2019-10-12 23:13:16.311', 'привилегированное учебное заведение XIX в., где рождался на свет поэтический гений А.С. Пушкина', 59.717474, 30.397027, 'Музей-Лицей А.С. Пушкина', 0, '', '2019-10-12 23:13:16.311', NULL, 'museum');
INSERT INTO public.point VALUES (75, 0, '2019-10-12 23:13:16.512', 'экспозиция о жизни и творческом пути поэта и его современников', 59.9394207, 30.3486526, 'Музей-квартира Н.А. Некрасова', 0, '', '2019-10-12 23:13:16.512', NULL, 'museum');
INSERT INTO public.point VALUES (76, 0, '2019-10-12 23:13:16.65', 'воссозданные уникальные интерьеры, история русской словесности эпохи Державина', 59.919264, 30.310242, 'Музей-усадьба Г.Р. Державина', 0, '', '2019-10-12 23:13:16.65', NULL, 'museum');
INSERT INTO public.point VALUES (77, 0, '2019-10-12 23:13:16.765', 'крупнейший негосударственный музей современного искусства в России', 59.932118, 30.25139, 'Эрарта, музей современного искусства', 0, '', '2019-10-12 23:13:16.765', NULL, 'museum');
INSERT INTO public.point VALUES (78, 0, '2019-10-12 23:13:16.91', 'посвящение уникальному творческому наследию семьи Рерихов', 59.93163, 30.272012, 'Музей-институт семьи Рерихов', 0, '', '2019-10-12 23:13:16.91', NULL, 'museum');
INSERT INTO public.point VALUES (79, 0, '2019-10-12 23:13:17.01', 'временное жилище, в котором В. Ленин скрывался под видом финского крестьянина', 60.0821102, 30.0313543, 'Музей "Шалаш"', 0, '', '2019-10-12 23:13:17.01', NULL, 'museum');
INSERT INTO public.point VALUES (80, 0, '2019-10-12 23:13:17.198', 'историко-революционный памятник, связанный с деятельностью В.И. Ленина', 60.0797715, 29.976599, 'Музей "Сарай"', 0, '', '2019-10-12 23:13:17.198', NULL, 'museum');
INSERT INTO public.point VALUES (39, 0, '2019-10-12 23:13:09.781', 'Музей расположен на форту &laquo;Константин&raquo;. Модели маяков, мобильные фонари и гигантские линзы рассказывают о том, как менялись &laquo;стражи морей&raquo;.', 59.9957424, 29.6996099, 'Музей маяков', 0, '', '2019-10-12 23:13:09.781', NULL, 'museum');
INSERT INTO public.point VALUES (42, 0, '2019-10-12 23:13:10.3', 'уникальная коллекция действующих игровых автоматов, выпускавшихся в СССР с середины 70-х годов', 59.9400536, 30.3267047, 'Музей советских игровых автоматов', 0, '', '2019-10-12 23:13:10.3', NULL, 'museum');


--
-- Data for Name: point_img_url_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.point_img_url_list VALUES (7, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911098279.jpg');
INSERT INTO public.point_img_url_list VALUES (8, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911141384.jpg');
INSERT INTO public.point_img_url_list VALUES (9, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911146267.jpg');
INSERT INTO public.point_img_url_list VALUES (10, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911147279.jpg');
INSERT INTO public.point_img_url_list VALUES (11, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911184480.jpg');
INSERT INTO public.point_img_url_list VALUES (12, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911184635.jpg');
INSERT INTO public.point_img_url_list VALUES (13, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911184871.jpg');
INSERT INTO public.point_img_url_list VALUES (14, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185010.jpg');
INSERT INTO public.point_img_url_list VALUES (15, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185184.jpg');
INSERT INTO public.point_img_url_list VALUES (16, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185343.jpg');
INSERT INTO public.point_img_url_list VALUES (17, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185563.jpg');
INSERT INTO public.point_img_url_list VALUES (18, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185744.jpg');
INSERT INTO public.point_img_url_list VALUES (19, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911185935.jpg');
INSERT INTO public.point_img_url_list VALUES (20, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911186056.jpg');
INSERT INTO public.point_img_url_list VALUES (21, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911186371.jpg');
INSERT INTO public.point_img_url_list VALUES (22, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911186660.jpg');
INSERT INTO public.point_img_url_list VALUES (23, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911186779.jpg');
INSERT INTO public.point_img_url_list VALUES (24, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911186935.jpg');
INSERT INTO public.point_img_url_list VALUES (25, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911187062.jpg');
INSERT INTO public.point_img_url_list VALUES (26, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911187189.jpg');
INSERT INTO public.point_img_url_list VALUES (27, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911187340.jpg');
INSERT INTO public.point_img_url_list VALUES (28, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911187615.jpg');
INSERT INTO public.point_img_url_list VALUES (29, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911187841.jpg');
INSERT INTO public.point_img_url_list VALUES (30, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188155.jpg');
INSERT INTO public.point_img_url_list VALUES (31, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188342.jpg');
INSERT INTO public.point_img_url_list VALUES (32, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188473.jpg');
INSERT INTO public.point_img_url_list VALUES (33, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188642.jpg');
INSERT INTO public.point_img_url_list VALUES (34, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188779.jpg');
INSERT INTO public.point_img_url_list VALUES (35, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911188945.jpg');
INSERT INTO public.point_img_url_list VALUES (36, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911189235.jpg');
INSERT INTO public.point_img_url_list VALUES (37, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911189337.jpg');
INSERT INTO public.point_img_url_list VALUES (38, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911189473.jpg');
INSERT INTO public.point_img_url_list VALUES (39, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911189584.jpg');
INSERT INTO public.point_img_url_list VALUES (40, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911189855.jpg');
INSERT INTO public.point_img_url_list VALUES (41, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190013.jpg');
INSERT INTO public.point_img_url_list VALUES (42, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190176.jpg');
INSERT INTO public.point_img_url_list VALUES (43, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190376.jpg');
INSERT INTO public.point_img_url_list VALUES (44, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190520.jpg');
INSERT INTO public.point_img_url_list VALUES (45, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190657.jpg');
INSERT INTO public.point_img_url_list VALUES (46, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911190833.jpg');
INSERT INTO public.point_img_url_list VALUES (48, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911191202.jpg');
INSERT INTO public.point_img_url_list VALUES (49, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911191362.jpg');
INSERT INTO public.point_img_url_list VALUES (50, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911191789.jpg');
INSERT INTO public.point_img_url_list VALUES (51, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911191922.jpg');
INSERT INTO public.point_img_url_list VALUES (52, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192081.jpg');
INSERT INTO public.point_img_url_list VALUES (53, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192214.jpg');
INSERT INTO public.point_img_url_list VALUES (54, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192306.jpg');
INSERT INTO public.point_img_url_list VALUES (55, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192435.jpg');
INSERT INTO public.point_img_url_list VALUES (56, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192581.jpg');
INSERT INTO public.point_img_url_list VALUES (57, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911192691.jpg');
INSERT INTO public.point_img_url_list VALUES (58, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911193189.jpg');
INSERT INTO public.point_img_url_list VALUES (59, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911193815.jpg');
INSERT INTO public.point_img_url_list VALUES (60, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911193929.jpg');
INSERT INTO public.point_img_url_list VALUES (61, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194120.jpg');
INSERT INTO public.point_img_url_list VALUES (62, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194242.jpg');
INSERT INTO public.point_img_url_list VALUES (63, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194381.jpg');
INSERT INTO public.point_img_url_list VALUES (64, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194551.jpg');
INSERT INTO public.point_img_url_list VALUES (65, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194689.jpg');
INSERT INTO public.point_img_url_list VALUES (66, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194850.jpg');
INSERT INTO public.point_img_url_list VALUES (67, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911194981.jpg');
INSERT INTO public.point_img_url_list VALUES (68, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911195091.jpg');
INSERT INTO public.point_img_url_list VALUES (69, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911195275.jpg');
INSERT INTO public.point_img_url_list VALUES (70, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911195523.jpg');
INSERT INTO public.point_img_url_list VALUES (71, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911195691.jpg');
INSERT INTO public.point_img_url_list VALUES (72, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911195807.jpg');
INSERT INTO public.point_img_url_list VALUES (73, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196042.jpg');
INSERT INTO public.point_img_url_list VALUES (74, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196278.jpg');
INSERT INTO public.point_img_url_list VALUES (75, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196386.jpg');
INSERT INTO public.point_img_url_list VALUES (76, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196585.jpg');
INSERT INTO public.point_img_url_list VALUES (47, 'https://img.rg.ru/img/content/165/68/31/TASS_22953960_d_850.jpg');
INSERT INTO public.point_img_url_list VALUES (77, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196722.jpg');
INSERT INTO public.point_img_url_list VALUES (78, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196838.jpg');
INSERT INTO public.point_img_url_list VALUES (79, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911196984.jpg');
INSERT INTO public.point_img_url_list VALUES (80, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911197111.jpg');
INSERT INTO public.point_img_url_list VALUES (81, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570911197325.jpg');
INSERT INTO public.point_img_url_list VALUES (83, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570943999175.jpg');
INSERT INTO public.point_img_url_list VALUES (84, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570943999523.jpg');
INSERT INTO public.point_img_url_list VALUES (85, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570943999887.jpg');
INSERT INTO public.point_img_url_list VALUES (86, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944000054.jpg');
INSERT INTO public.point_img_url_list VALUES (87, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944000394.jpg');
INSERT INTO public.point_img_url_list VALUES (88, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944000610.jpg');
INSERT INTO public.point_img_url_list VALUES (89, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944000827.jpg');
INSERT INTO public.point_img_url_list VALUES (90, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944001071.jpg');
INSERT INTO public.point_img_url_list VALUES (91, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944001263.jpg');
INSERT INTO public.point_img_url_list VALUES (92, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944001409.jpg');
INSERT INTO public.point_img_url_list VALUES (93, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944001652.jpg');
INSERT INTO public.point_img_url_list VALUES (94, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944001873.jpg');
INSERT INTO public.point_img_url_list VALUES (95, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944002284.jpg');
INSERT INTO public.point_img_url_list VALUES (96, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944002925.jpg');
INSERT INTO public.point_img_url_list VALUES (97, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944003153.jpg');
INSERT INTO public.point_img_url_list VALUES (98, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944003339.jpg');
INSERT INTO public.point_img_url_list VALUES (99, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944003558.jpg');
INSERT INTO public.point_img_url_list VALUES (100, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944003750.jpg');
INSERT INTO public.point_img_url_list VALUES (101, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944003979.jpg');
INSERT INTO public.point_img_url_list VALUES (102, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944004191.jpg');
INSERT INTO public.point_img_url_list VALUES (103, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944004402.jpg');
INSERT INTO public.point_img_url_list VALUES (104, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944004551.jpg');
INSERT INTO public.point_img_url_list VALUES (105, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944004710.jpg');
INSERT INTO public.point_img_url_list VALUES (106, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944004886.jpg');
INSERT INTO public.point_img_url_list VALUES (107, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944005262.jpg');
INSERT INTO public.point_img_url_list VALUES (108, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944005502.jpg');
INSERT INTO public.point_img_url_list VALUES (109, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944005697.jpg');
INSERT INTO public.point_img_url_list VALUES (110, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944005907.jpg');
INSERT INTO public.point_img_url_list VALUES (111, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944006098.jpg');
INSERT INTO public.point_img_url_list VALUES (112, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944006251.jpg');
INSERT INTO public.point_img_url_list VALUES (113, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944006447.jpg');
INSERT INTO public.point_img_url_list VALUES (114, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944006742.jpg');
INSERT INTO public.point_img_url_list VALUES (115, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944006982.jpg');
INSERT INTO public.point_img_url_list VALUES (116, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944007132.jpg');
INSERT INTO public.point_img_url_list VALUES (117, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944007301.jpg');
INSERT INTO public.point_img_url_list VALUES (118, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944007532.jpg');
INSERT INTO public.point_img_url_list VALUES (119, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944007674.jpg');
INSERT INTO public.point_img_url_list VALUES (120, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944007842.jpg');
INSERT INTO public.point_img_url_list VALUES (121, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944008030.jpg');
INSERT INTO public.point_img_url_list VALUES (122, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944008229.jpg');
INSERT INTO public.point_img_url_list VALUES (123, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944008458.jpg');
INSERT INTO public.point_img_url_list VALUES (124, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944008724.jpg');
INSERT INTO public.point_img_url_list VALUES (125, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944008942.jpg');
INSERT INTO public.point_img_url_list VALUES (126, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944009130.jpg');
INSERT INTO public.point_img_url_list VALUES (127, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944009452.jpg');
INSERT INTO public.point_img_url_list VALUES (128, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944009749.jpg');
INSERT INTO public.point_img_url_list VALUES (129, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944009960.jpg');
INSERT INTO public.point_img_url_list VALUES (130, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944010167.jpg');
INSERT INTO public.point_img_url_list VALUES (131, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944010408.jpg');
INSERT INTO public.point_img_url_list VALUES (132, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570944010659.jpg');
INSERT INTO public.point_img_url_list VALUES (133, 'https://hsto.org/files/aa5/734/40e/aa573440eaeb49088be6ae673c357835.jpg');
INSERT INTO public.point_img_url_list VALUES (503, '');
INSERT INTO public.point_img_url_list VALUES (504, '');
INSERT INTO public.point_img_url_list VALUES (507, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570970331885.jpg');
INSERT INTO public.point_img_url_list VALUES (511, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570970643567.jpg');


--
-- Data for Name: route; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.route VALUES (3, 0, NULL, NULL, 'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1507053534/00-lead-plane-flying-clouds-LASTMINUTEHACKS1017.jpg?itok=YHo_gGPL', 'plane', '2019-10-12 19:05:36.003', '2019-10-12 19:05:36.003', 2, 'description');
INSERT INTO public.route VALUES (512, 0, NULL, NULL, 'https://api.selcdn.ru/v1/SEL_99509/SpbSeeker/img_1570971454467.jpg', 'Travel 1', '2019-10-13 12:57:34.557', '2019-10-13 12:57:34.557', 2, 'Some description');


--
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hibernate_sequence', 513, true);


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- Name: hint hint_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hint
    ADD CONSTRAINT hint_pkey PRIMARY KEY (id);


--
-- Name: point point_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.point
    ADD CONSTRAINT point_pkey PRIMARY KEY (id);


--
-- Name: route travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route
    ADD CONSTRAINT travel_pkey PRIMARY KEY (id);


--
-- Name: point fk6c33y4gg3ln78whv5ycd3q3yy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.point
    ADD CONSTRAINT fk6c33y4gg3ln78whv5ycd3q3yy FOREIGN KEY (travel_id) REFERENCES public.route(id);


--
-- Name: point_img_url_list fkllf8vi5peqc1ntloknn432ebm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.point_img_url_list
    ADD CONSTRAINT fkllf8vi5peqc1ntloknn432ebm FOREIGN KEY (point_id) REFERENCES public.point(id);


--
-- Name: route fkqn1x6802pqjmnu02dotacxlb5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.route
    ADD CONSTRAINT fkqn1x6802pqjmnu02dotacxlb5 FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- PostgreSQL database dump complete
--

