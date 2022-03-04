# 고양이와 개는 몇 마리 있을까
select ANIMAL_TYPE, count(distinct animal_id) as count
from ANIMAL_INS group by animal_type;

# 동명 동물 수 찾기
select NAME, count(name) as COUNT from ANIMAL_INS
group by name having name!='' and COUNT>=2
order by name;

# 입양 시각 구하기(1)
select hour(datetime) as HOUR, count(animal_id) as COUNT
from ANIMAL_OUTS group by HOUR
having HOUR >=9 AND HOUR<=19
order by HOUR;

# 입양 시각 구하기(2)
