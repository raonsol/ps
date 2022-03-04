# 모든 레코드 조회
select * from ANIMAL_INS order by ANIMAL_ID;

# 역순 정렬하기
select name, datetime from ANIMAL_INS order by ANIMAL_ID desc;

# 아픈 동물 찾기
select animal_id, name from ANIMAL_INS
where intake_condition="Sick" order by animal_id;

# 어린 동물 찾기
select animal_id, name from ANIMAL_INS
where intake_condition!="Aged" order by animal_id;

# 동물의 아이디와 이름
select animal_id, name from ANIMAL_INS order by animal_id;

# 여러 기준으로 정렬하기
select animal_id, name, datetime from ANIMAL_INS
order by name, datetime desc;

# 상위 n개 레코드
select name from ANIMAL_INS
order by datetime limit 1;